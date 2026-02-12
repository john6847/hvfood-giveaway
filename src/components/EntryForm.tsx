'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { giveawayQuestions } from '../data';

export default function EntryForm() {
    const [name, setName] = useState('');
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdzmrxgJBnHthzVUnUDl9X7gEWqyp2wPNHIknYsrd7z_Ytrjg/formResponse';
        
        const submissionData = new FormData();
        // Mapping fields to Google Form Entry IDs
        submissionData.append('entry.1480415295', name); // Name
        submissionData.append('entry.1718488684', formData['email'] || ''); // Email
        submissionData.append('entry.1044711038', formData['phone'] || ''); // Phone
        submissionData.append('entry.1220682221', formData['city'] || ''); // City
        submissionData.append('entry.160058162', formData['wanted_products'] || ''); // Wanted Products
        submissionData.append('entry.1763557649', formData['products'] || ''); // Products
        submissionData.append('entry.1206532077', formData['team'] || ''); // Team
        
        // Google Form Hidden Fields
        submissionData.append('fvv', '1');
        submissionData.append('fbzx', '-3332494909398194788');
        submissionData.append('pageHistory', '0');

        try {
            await fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: submissionData
            });
            // Since no-cors returns an opaque response, we assume success if no network error occurred.
            setStatus('success');
            console.log('Form submitted successfully');
            
            // Optional: Reset form
            setName('');
            setFormData({});
        } catch (error) {
            console.error('Submission failed', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <section className="w-full px-4 md:px-20 py-16 bg-primary/5 dark:bg-white/5" id="entry-form">
                <div className="max-w-[960px] mx-auto text-center py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-background-light dark:bg-background-dark p-12 rounded-2xl shadow-xl border border-[#e8dcce] dark:border-white/10"
                    >
                        <h2 className="text-3xl font-black mb-4 text-[#1c150d] dark:text-white">You're In! 🎉</h2>
                        <p className="text-lg text-[#9c7449] dark:text-gray-300">
                            Thanks for entering the Gold Cup Giveaway.<br/>
                            Good luck!
                        </p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="mt-8 px-8 py-3 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
                        >
                            Submit Another Entry
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

  return (
    <section className="w-full px-4 md:px-20 py-16 bg-primary/5 dark:bg-white/5" id="entry-form">
      <div className="max-w-[960px] mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black mb-4"
          >
            The Qualifying Form
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#9c7449] dark:text-primary/70 text-lg"
          >
            Tell us about your habits for a chance to win the chance of a lifetime.
          </motion.p>
        </div>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background-light dark:bg-background-dark/50 p-6 md:p-12 rounded-2xl shadow-xl border border-[#e8dcce] dark:border-white/10"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Added Name Field */}
            <div className="md:col-span-2 flex flex-col gap-3">
                 <label className="flex flex-col">
                    <p className="text-[#1c150d] dark:text-white text-base font-semibold leading-normal pb-2">Full Name</p>
                    <input 
                        className="form-input flex w-full rounded-lg text-[#1c150d] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#e8dcce] dark:border-white/20 bg-white dark:bg-zinc-800 h-14 placeholder:text-[#9c7449] p-4 transition-all"
                        type="text"
                        placeholder="e.g. Charlie Bucket"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                 </label>
            </div>

            {giveawayQuestions.map((q) => {
                const isFullWidth = q.type === 'email' || q.type === 'textarea';
                return (
                    <div key={q.id} className={`flex flex-col gap-3 ${isFullWidth ? 'md:col-span-2' : ''}`}>
                         <label className="flex flex-col">
                            <p className="text-[#1c150d] dark:text-white text-base font-semibold leading-normal pb-2">{q.label}</p>
                            {q.type === 'select' ? (
                                <div className="relative" style={{ '--select-button-svg': "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(156,116,73)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')" } as any}>
                                    <select 
                                        required
                                        className="form-input flex w-full rounded-lg text-[#1c150d] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#e8dcce] dark:border-white/20 bg-white dark:bg-zinc-800 h-14 bg-[image:var(--select-button-svg)] p-4 appearance-none transition-all"
                                        onChange={(e) => handleChange(q.id, e.target.value)}
                                        value={formData[q.id] || ''}
                                    >
                                        <option disabled value="">Select your option</option>
                                        {q.options?.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </div>
                            ) : q.type === 'textarea' ? (
                                <textarea
                                    className="form-input flex w-full rounded-lg text-[#1c150d] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#e8dcce] dark:border-white/20 bg-white dark:bg-zinc-800 min-h-[120px] placeholder:text-[#9c7449] p-4 transition-all resize-y"
                                    placeholder={q.placeholder}
                                    required
                                    value={formData[q.id] || ''}
                                    onChange={(e) => handleChange(q.id, e.target.value)}
                                />
                            ) : (
                                <input 
                                    className="form-input flex w-full rounded-lg text-[#1c150d] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#e8dcce] dark:border-white/20 bg-white dark:bg-zinc-800 h-14 placeholder:text-[#9c7449] p-4 transition-all"
                                    type={q.type}
                                    placeholder={q.placeholder}
                                    required
                                    value={formData[q.id] || ''}
                                    onChange={(e) => handleChange(q.id, e.target.value)}
                                />
                            )}
                         </label>
                    </div>
                );
            })}
            
            <div className="mt-2 md:col-span-2 flex flex-col items-center gap-4">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="flex w-full md:w-max min-w-[300px] cursor-pointer items-center justify-center rounded-lg h-14 px-10 bg-primary text-white text-lg font-black uppercase tracking-wider shadow-lg hover:shadow-primary/20 transition-all font-display"
                >
                    <span className="truncate">Submit Entry & Win</span>
                </motion.button>
                <p className="text-xs text-[#9c7449] dark:text-white/40 italic">By entering, you agree to the Official Rules and Privacy Policy.</p>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
