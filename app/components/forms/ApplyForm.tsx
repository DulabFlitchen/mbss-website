'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  studentName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  applyingFor: string;
  previousSchool: string;
  message: string;
  botField: string;
}

interface FormErrors {
  studentName?: string;
  gender?: string;
  dateOfBirth?: string;
  email?: string;
  phone?: string;
  guardianName?: string;
  guardianPhone?: string;
  guardianEmail?: string;
  applyingFor?: string;
  previousSchool?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{9}$/;
const COUNTRY_CODE = '+255';

export default function ApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    applyingFor: '',
    previousSchool: '',
    message: '',
    botField: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    } else if (formData.studentName.trim().length < 2) {
      newErrors.studentName = 'Student name must be at least 2 characters';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter exactly 9 digits';
    }

    if (!formData.guardianName.trim()) {
      newErrors.guardianName = 'Guardian name is required';
    }

    if (!formData.guardianPhone.trim()) {
      newErrors.guardianPhone = 'Guardian phone is required';
    } else if (!phoneRegex.test(formData.guardianPhone.trim())) {
      newErrors.guardianPhone = 'Please enter exactly 9 digits';
    }

    if (formData.guardianEmail.trim() && !emailRegex.test(formData.guardianEmail.trim())) {
      newErrors.guardianEmail = 'Please enter a valid guardian email';
    }

    if (!formData.applyingFor) {
      newErrors.applyingFor = 'Please select class/level';
    }

    if (!formData.previousSchool.trim()) {
      newErrors.previousSchool = 'Previous school is required';
    }

    if (formData.message.trim().length > 1500) {
      newErrors.message = 'Additional information should be 1500 characters or fewer';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'phone' || name === 'guardianPhone') {
      const phoneValue = value.replace(/\D/g, '').slice(0, 9);
      setFormData((prev) => ({ ...prev, [name]: phoneValue }));

      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'guardianEmail' && !value.trim()) {
      setErrors((prev) => ({ ...prev, guardianEmail: undefined }));
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
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: `${COUNTRY_CODE}${formData.phone}`,
          guardianPhone: `${COUNTRY_CODE}${formData.guardianPhone}`,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          studentName: '',
          gender: '',
          dateOfBirth: '',
          email: '',
          phone: '',
          guardianName: '',
          guardianPhone: '',
          guardianEmail: '',
          applyingFor: '',
          previousSchool: '',
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
        <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700 mb-6">
          Thank you for applying to Mwandege Boys Secondary School. We will contact you soon.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-8"
      name="application"
      method="POST"
      data-netlify="true"
      netlify-honeypot="botField"
    >
      <input type="hidden" name="form-name" value="application" />
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

      <h3 className="text-xl font-bold text-blue-900 mb-6">Student Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="studentName" className="block text-gray-800 font-medium mb-2">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={100}
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? 'studentName-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
              errors.studentName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Full name"
          />
          {errors.studentName && (
            <p id="studentName-error" className="text-red-500 text-sm mt-1">{errors.studentName}</p>
          )}
        </div>

        <div>
          <label htmlFor="gender" className="block text-gray-800 font-medium mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.gender)}
            aria-describedby={errors.gender ? 'gender-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${
              errors.gender ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="" className="text-gray-400">Select gender</option>
            <option value="male" className="text-gray-900">Male</option>
            <option value="female" className="text-gray-900">Female</option>
          </select>
          {errors.gender && <p id="gender-error" className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="dateOfBirth" className="block text-gray-800 font-medium mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.dateOfBirth)}
            aria-describedby={errors.dateOfBirth ? 'dateOfBirth-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${
              errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.dateOfBirth && (
            <p id="dateOfBirth-error" className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
          )}
        </div>

        <div>
          <label htmlFor="applyingFor" className="block text-gray-800 font-medium mb-2">
            Applying For <span className="text-red-500">*</span>
          </label>
          <select
            id="applyingFor"
            name="applyingFor"
            value={formData.applyingFor}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.applyingFor)}
            aria-describedby={errors.applyingFor ? 'applyingFor-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${
              errors.applyingFor ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="" className="text-gray-400">Select class</option>
            <option value="form1" className="text-gray-900">Form 1</option>
            <option value="form2" className="text-gray-900">Form 2</option>
            <option value="form3" className="text-gray-900">Form 3</option>
            <option value="form4" className="text-gray-900">Form 4</option>
            <option value="form5" className="text-gray-900">Form 5</option>
            <option value="form6" className="text-gray-900">Form 6</option>
          </select>
          {errors.applyingFor && (
            <p id="applyingFor-error" className="text-red-500 text-sm mt-1">{errors.applyingFor}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
            Student Email <span className="text-red-500">*</span>
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
            placeholder="student@email.com"
          />
          {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
            Student Phone <span className="text-red-500">*</span>
          </label>
          <div
            className={`flex w-full rounded-lg border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus-within:ring-2 focus-within:ring-blue-500`}
          >
            <span className="inline-flex items-center border-r border-gray-300 px-4 py-3 font-medium text-gray-700">
              {COUNTRY_CODE}
            </span>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              inputMode="numeric"
              pattern="[0-9]{9}"
              maxLength={9}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className="w-full rounded-r-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none"
              placeholder="712345678"
            />
          </div>
          {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-6 mt-8">Guardian Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="guardianName" className="block text-gray-800 font-medium mb-2">
            Guardian Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            required
            maxLength={100}
            aria-invalid={Boolean(errors.guardianName)}
            aria-describedby={errors.guardianName ? 'guardianName-error' : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
              errors.guardianName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Full name"
          />
          {errors.guardianName && (
            <p id="guardianName-error" className="text-red-500 text-sm mt-1">{errors.guardianName}</p>
          )}
        </div>

        <div>
          <label htmlFor="guardianPhone" className="block text-gray-800 font-medium mb-2">
            Guardian Phone <span className="text-red-500">*</span>
          </label>
          <div
            className={`flex w-full rounded-lg border ${
              errors.guardianPhone ? 'border-red-500' : 'border-gray-300'
            } focus-within:ring-2 focus-within:ring-blue-500`}
          >
            <span className="inline-flex items-center border-r border-gray-300 px-4 py-3 font-medium text-gray-700">
              {COUNTRY_CODE}
            </span>
            <input
              type="tel"
              id="guardianPhone"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              required
              inputMode="numeric"
              pattern="[0-9]{9}"
              maxLength={9}
              aria-invalid={Boolean(errors.guardianPhone)}
              aria-describedby={errors.guardianPhone ? 'guardianPhone-error' : undefined}
              className="w-full rounded-r-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none"
              placeholder="712345678"
            />
          </div>
          {errors.guardianPhone && (
            <p id="guardianPhone-error" className="text-red-500 text-sm mt-1">{errors.guardianPhone}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="guardianEmail" className="block text-gray-800 font-medium mb-2">
          Guardian Email
        </label>
        <input
          type="email"
          id="guardianEmail"
          name="guardianEmail"
          value={formData.guardianEmail}
          onChange={handleChange}
          maxLength={120}
          aria-invalid={Boolean(errors.guardianEmail)}
          aria-describedby={errors.guardianEmail ? 'guardianEmail-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
            errors.guardianEmail ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="guardian@email.com"
        />
        {errors.guardianEmail && (
          <p id="guardianEmail-error" className="text-red-500 text-sm mt-1">{errors.guardianEmail}</p>
        )}
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-6 mt-8">Academic Background</h3>

      <div className="mb-6">
        <label htmlFor="previousSchool" className="block text-gray-800 font-medium mb-2">
          Previous School <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="previousSchool"
          name="previousSchool"
          value={formData.previousSchool}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={150}
          aria-invalid={Boolean(errors.previousSchool)}
          aria-describedby={errors.previousSchool ? 'previousSchool-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 placeholder:text-gray-400 ${
            errors.previousSchool ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Name of previous school"
        />
        {errors.previousSchool && (
          <p id="previousSchool-error" className="text-red-500 text-sm mt-1">{errors.previousSchool}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          maxLength={1500}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
          placeholder="Any additional information you'd like to share"
        />
        {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
