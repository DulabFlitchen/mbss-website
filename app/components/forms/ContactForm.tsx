'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  botField: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+()\d\s-]{7,20}$/;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    botField: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone.trim() && !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'phone' && !value.trim()) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
      return;
    }

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          botField: '',
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setSubmitError(result?.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center" role="status" aria-live="polite">
        <CheckCircle className="w-12 h-12 mx-auto text-green-600 mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-700 mb-6">
          Thank you for contacting us. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-8"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="botField"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        name="botField"
        value={formData.botField}
        onChange={handleChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6" role="alert" aria-live="polite">
          <p className="text-red-700">{submitError || 'Something went wrong. Please try again.'}</p>
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={80}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Enter your full name"
        />
        {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={120}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength={20}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="+255..."
        />
        {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-800 font-medium mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          <option value="" className="text-gray-400">Select a subject</option>
          <option value="admission" className="text-gray-900">Admission Inquiry</option>
          <option value="general" className="text-gray-900">General Question</option>
          <option value="campus_tour" className="text-gray-900">Schedule Campus Tour</option>
          <option value="feedback" className="text-gray-900">Feedback</option>
          <option value="other" className="text-gray-900">Other</option>
        </select>
        {errors.subject && <p id="subject-error" className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          minLength={10}
          maxLength={2000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
          placeholder="How can we help you?"
        />
        {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
