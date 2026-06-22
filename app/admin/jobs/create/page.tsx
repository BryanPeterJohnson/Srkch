// app/admin/jobs/create/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CreateJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    city: '',        
    state: '',       
    type: 'Full-time',
    salary: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Data Saved (Frontend Only):', formData);
    alert('Job Posting Created Successfully! (Mocked)');
    setFormData({ title: '', company: '', city: '', state: '', type: 'Full-time', salary: '', description: '' });
  };

  // Shared light-themed styles
  const inputStyle = {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1', 
    backgroundColor: '#ffffff',  
    color: '#334155',            
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#334155',
    fontSize: '0.95rem'
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      
      <div style={{ padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href="/admin/jobs" style={{ color: '#3182ce', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
            ← Back to Admin Dashboard
          </Link>
        </div>

        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem', color: '#1e293b', fontWeight: '700' }}>Post a New Job</h1>
        <p style={{ color: '#64748b', marginBottom: '2.5rem', fontSize: '1rem' }}>Fill out the details below to publish a new position on your careers board.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Job Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={labelStyle}>Job Title</label>
            <input 
              type="text" name="title" value={formData.title} onChange={handleChange} required
              placeholder="e.g., Senior Full-Stack Developer"
              style={inputStyle}
            />
          </div>

          {/* Company Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={labelStyle}>Company</label>
            <input 
              type="text" name="company" value={formData.company} onChange={handleChange} required
              placeholder="e.g., Acme Corp"
              style={inputStyle}
            />
          </div>

          {/* Two Column Layout: City & State */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            
            {/* City Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={labelStyle}>City</label>
              <input 
                type="text" name="city" value={formData.city} onChange={handleChange} required
                placeholder="e.g., New York"
                style={inputStyle}
              />
            </div>

            {/* State Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={labelStyle}>State</label>
              <input 
                type="text" name="state" value={formData.state} onChange={handleChange} required
                placeholder="e.g., NY"
                style={inputStyle}
              />
            </div>

          </div>

          {/* Job Type Select (Moved down to its own row) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={labelStyle}>Job Type</label>
            <select 
              name="type" value={formData.type} onChange={handleChange}
              style={inputStyle}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Salary Range */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={labelStyle}>Salary Range (Optional)</label>
            <input 
              type="text" name="salary" value={formData.salary} onChange={handleChange}
              placeholder="e.g., $90,000 - $120,000 / year"
              style={inputStyle}
            />
          </div>

          {/* Job Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={labelStyle}>Job Description</label>
            <textarea 
              name="description" value={formData.description} onChange={handleChange} required
              placeholder="Outline role responsibilities, core skills, benefits, and instructions on how to apply..."
              style={{ ...inputStyle, minHeight: '180px', fontFamily: 'inherit', resize: 'vertical' }}
            />
          </div>

          {/* Form Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button 
              type="submit" 
              style={{ flex: 1, padding: '0.85rem', background: '#3182ce', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}
            >
              Publish Job Listing
            </button>
            
            <Link 
              href="/admin/jobs" 
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.85rem', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '6px', textDecoration: 'none', textAlign: 'center', fontWeight: '500', fontSize: '1rem' }}
            >
              Cancel
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}