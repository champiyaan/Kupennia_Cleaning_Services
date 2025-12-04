"use client";

import { useState, useEffect } from 'react';
import { Phone, Mail, Calendar, Trash2, RefreshCw, MessageSquare, Lock, Download, Plus, X } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import * as XLSX from 'xlsx';

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [recipients, setRecipients] = useState<string[]>([]);
  const [newRecipient, setNewRecipient] = useState('');
  const [recipientError, setRecipientError] = useState('');
  const [isAddingRecipient, setIsAddingRecipient] = useState(false);

  // Check authentication status
  const checkAuth = async () => {
    try {
      const response = await fetch('/api/submissions');
      if (response.status === 401) {
        setIsAuthenticated(false);
      } else if (response.ok) {
        setIsAuthenticated(true);
        const data = await response.json();
        setSubmissions(data.submissions || []);
      }
    } catch (err) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // Fetch recipients when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchRecipients();
    }
  }, [isAuthenticated]);

  const fetchRecipients = async () => {
    try {
      const response = await fetch('/api/recipients');
      if (response.ok) {
        const data = await response.json();
        setRecipients(data.recipients || []);
      }
    } catch (err) {
      console.error('Error fetching recipients:', err);
    }
  };

  const handleAddRecipient = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddingRecipient(true);
    setRecipientError('');

    try {
      const response = await fetch('/api/recipients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newRecipient }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add recipient');
      }

      setNewRecipient('');
      fetchRecipients();
    } catch (err) {
      setRecipientError(err instanceof Error ? err.message : 'Failed to add recipient');
    } finally {
      setIsAddingRecipient(false);
    }
  };

  const handleRemoveRecipient = async (email: string) => {
    if (!confirm(`Remove ${email} from notification recipients?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/recipients?email=${encodeURIComponent(email)}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to remove recipient');
      }

      fetchRecipients();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to remove recipient');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Invalid password');
      }

      setIsAuthenticated(true);
      setPassword('');
      fetchSubmissions();
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/login', { method: 'DELETE' });
      setIsAuthenticated(false);
      setSubmissions([]);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/submissions');
      if (response.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      if (!response.ok) throw new Error('Failed to fetch submissions');
      const data = await response.json();
      setSubmissions(data.submissions || []);
      setError('');
    } catch (err) {
      setError('Failed to load submissions. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return;
    }

    try {
      const response = await fetch(`/api/submissions?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      
      if (!response.ok) throw new Error('Failed to delete');
      
      setSubmissions(submissions.filter(s => s.id !== id));
    } catch (err) {
      alert('Failed to delete submission');
      console.error(err);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-ZW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleExportExcel = () => {
    if (submissions.length === 0) {
      alert('No submissions to export');
      return;
    }

    // Prepare data for Excel
    const excelData = submissions.map((submission) => ({
      'ID': submission.id,
      'Name': submission.name,
      'Email': submission.email,
      'Phone': submission.phone,
      'Service': submission.service || 'N/A',
      'Message': submission.message || 'N/A',
      'Date Submitted': formatDate(submission.timestamp),
      'Timestamp': submission.timestamp,
    }));

    // Create worksheet
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    
    // Set column widths
    const columnWidths = [
      { wch: 20 }, // ID
      { wch: 25 }, // Name
      { wch: 30 }, // Email
      { wch: 18 }, // Phone
      { wch: 25 }, // Service
      { wch: 50 }, // Message
      { wch: 25 }, // Date Submitted
      { wch: 25 }, // Timestamp
    ];
    worksheet['!cols'] = columnWidths;

    // Create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Submissions');

    // Generate filename with current date
    const date = new Date().toISOString().split('T')[0];
    const filename = `submissions_${date}.xlsx`;

    // Download file
    XLSX.writeFile(workbook, filename);
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <AnimatedSection>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <Lock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Admin Login
                </h1>
                <p className="text-gray-600">
                  Enter password to access submissions
                </p>
              </div>

              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-800 text-sm">{loginError}</p>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter admin password"
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  // Submissions list
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Client Submissions
              </h1>
              <p className="text-gray-600">
                View and manage all contact form submissions
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleExportExcel}
                disabled={submissions.length === 0}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Download Excel file"
              >
                <Download className="w-4 h-4" />
                Export Excel
              </button>
              <button
                onClick={fetchSubmissions}
                disabled={loading}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Email Recipients Management */}
        <AnimatedSection className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Email Notification Recipients
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Manage email addresses that receive notifications when new contact form submissions are received.
            </p>

            {/* Add Recipient Form */}
            <form onSubmit={handleAddRecipient} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newRecipient}
                  onChange={(e) => setNewRecipient(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isAddingRecipient}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              {recipientError && (
                <p className="text-red-600 text-sm mt-2">{recipientError}</p>
              )}
            </form>

            {/* Recipients List */}
            {recipients.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Mail className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No recipients configured. Add an email to start receiving notifications.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {recipients.map((email) => (
                  <div
                    key={email}
                    className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{email}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveRecipient(email)}
                      className="text-red-600 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                      title="Remove recipient"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary-600 mb-4" />
            <p className="text-gray-600">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No submissions yet.</p>
            <p className="text-gray-500 mt-2">Submissions will appear here when customers fill out the contact form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <AnimatedSection key={submission.id}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {submission.name}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <a 
                            href={`mailto:${submission.email}`}
                            className="hover:text-primary-600"
                          >
                            {submission.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a 
                            href={`tel:${submission.phone}`}
                            className="hover:text-primary-600"
                          >
                            {submission.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(submission.timestamp)}
                        </div>
                        {submission.service && (
                          <div className="mt-2">
                            <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-semibold">
                              {submission.service}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(submission.id)}
                      className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete submission"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {submission.message && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-4 h-4 text-gray-400 mt-1" />
                        <p className="text-gray-700 whitespace-pre-wrap">
                          {submission.message}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {submissions.length > 0 && (
          <div className="mt-8 text-center text-gray-600">
            <p>Total submissions: <span className="font-semibold">{submissions.length}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

