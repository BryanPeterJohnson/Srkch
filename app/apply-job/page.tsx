"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ALL_JOBS } from '@/app/data/jobs';

/*
 * Default export wraps the form in a Suspense boundary.
 * useSearchParams() lives in the inner component (ApplicationFormContent),
 * which is what Next.js 16 requires to statically prerender this route
 * without the "useSearchParams() should be wrapped in a suspense boundary" error.
 */
export default function ApplicationForm() {
  return (
    <Suspense fallback={<ApplicationFormSkeleton />}>
      <ApplicationFormContent />
    </Suspense>
  );
}

function ApplicationFormContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const job = ALL_JOBS.find((j) => j.id.toString() === jobId);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-display">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header Section */}
        <header className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-center">
            {/* Replace with your actual logo asset */}
            <div className="flex items-center space-x-1 text-[#0C447C] font-bold tracking-wider text-base font-display">
              <span>SRK Care at Home</span>
            </div>
          </div>
          <h1 className="text-xl font-bold text-[#0E162B] font-display">You are applying for:</h1>
          <p className="text-lg font-semibold text-[#0D2D52] mt-1 font-display">
            {job ? job.title : "General Application"}
          </p>
          <p className="text-sm text-gray-600 mt-1 font-display">
            {job ? (
              <>
                <span className="font-medium">Location:</span> {job.location}
                <span className="mx-2">|</span>
                <span className="font-medium">Reference:</span> #{job.id}
              </>
            ) : (
              <span>Submit your details and we&apos;ll match you with open roles.</span>
            )}
          </p>
        </header>

        <form className="space-y-6">

          {/* Section 1: Your Information & Location */}
          <div className="bg-[#159BA1]/5 p-6 rounded-lg shadow-sm border border-[#159BA1]/30 space-y-4">
            <h2 className="text-lg font-bold text-[#0E162B] border-b border-[#159BA1]/40 pb-2 font-display">Your Information</h2>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 font-display">First Name <span className="text-[#E57531]">*</span></label>
                <input type="text" required className="mt-1 block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 font-display">Last Name <span className="text-[#E57531]">*</span></label>
                <input type="text" required className="mt-1 block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 font-display">Email <span className="text-[#E57531]">*</span></label>
                <input type="email" required className="mt-1 block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 font-display">Phone <span className="text-[#E57531]">*</span></label>
                <input type="tel" required className="mt-1 block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 font-display">Resume/CV <span className="text-[#E57531]">*</span></label>
                <input type="file" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#0D2D52] file:text-white hover:file:bg-[#005B8E] bg-white border border-gray-300 rounded p-1 font-display" />
                <p className="text-xs text-gray-500 mt-1 font-display">We accept doc, docx, pdf, txt, and rtf files.</p>
              </div>


            </div>


          </div>

          {/* Section 2: Voluntary Self-Identification Forms */}
          <div className="bg-[#159BA1]/5 p-6 rounded-lg shadow-sm border border-[#159BA1]/30 space-y-6 text-xs text-gray-700 leading-relaxed font-display">

            {/* Disability Self-ID */}
            <section className="space-y-3">
              <div className="border-b border-[#159BA1]/40 pb-2">
                <h2 className="text-lg font-bold text-[#0E162B] font-display">Voluntary Self-Identification of Disability</h2>
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>Form CC-305</span>
                  <span>OMB Control Number 1250-0005</span>
                  <span>Expires 04/30/2026</span>
                </div>
              </div>

              <p className="font-semibold">Why are you being asked to complete this form?</p>
              <p>
                We are a federal contractor or subcontractor. The law requires us to provide equal employment opportunity to qualified people with disabilities. We have a goal of having at least 7% of our workers as people with disabilities. The law says we must ask you to update our records towards this goal. To do this, we must ask applicants and employees if they have a disability or have ever had one. People can become disabled, so we need to ask this question at least every five years.
              </p>
              <p>
                Completing this form is voluntary, and we hope that you will choose to do so. Your answer is confidential. No one who makes hiring decisions will see it. Your decision to complete the form and your answer will not harm you in any way. For more information about the law or this form, visit the U.S. Department of Labor&apos;s Office of Federal Contract Compliance Programs (OFCCP) website at <a href="https://www.dol.gov/ofccp" target="_blank" rel="noreferrer" className="text-[#005B8E] underline">www.dol.gov/ofccp</a>.
              </p>

              <p className="font-semibold">How do you know if you have a disability?</p>
              <p>
                A disability is a condition that substantially limits one or more of your &quot;major life activities.&quot; If you have or have ever had such a condition, you are a person with a disability. <span className="font-semibold">Disabilities include, but are not limited to:</span>
              </p>

              <ul className="list-disc pl-5 space-y-1 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <li>Alcohol or other substance use disorder</li>
                <li>Autoimmune disorder (lupus, fibromyalgia, rheumatoid arthritis, HIV/AIDS)</li>
                <li>Blind or low vision</li>
                <li>Cancer (past or present)</li>
                <li>Cardiovascular or heart disease</li>
                <li>Celiac disease</li>
                <li>Cerebral palsy</li>
                <li>Deaf or serious difficulty hearing</li>
                <li>Diabetes</li>
                <li>Disfigurement (caused by burns, wounds, accidents, congenital disorders)</li>
                <li>Epilepsy or other seizure disorder</li>
                <li>Gastrointestinal disorders (Crohn&apos;s disease, Irritable bowel syndrome)</li>
                <li>Intellectual or developmental disability</li>
                <li>Mental health conditions (depression, bipolar, anxiety, schizophrenia, PTSD)</li>
                <li>Missing limbs or partially missing limbs</li>
                <li>Mobility impairment requiring use of wheelchair, scooter, walker, leg brace(s)</li>
                <li>Nervous system condition (migraine headaches, Parkinson&apos;s disease, MS)</li>
                <li>Neurodivergence (ADHD, autism spectrum disorder, dyslexia, dyspraxia)</li>
                <li>Partial or complete paralysis (any cause)</li>
                <li>Pulmonary or respiratory conditions (tuberculosis, asthma, emphysema)</li>
                <li>Short stature (dwarfism)</li>
                <li>Traumatic brain injury</li>
              </ul>

              <div className="pt-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1 font-display">Disability Status</label>
                <select className="block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display">
                  <option value="">-- Please Select --</option>
                  <option value="yes">Yes, I Have A Disability, Or Have A History/Record Of Having A Disability</option>
                  <option value="no">No, I Don&apos;t Have A Disability, Or A History/Record Of Having A Disability</option>
                  <option value="decline">I Don&apos;t Wish To Answer</option>
                </select>
              </div>
            </section>

            {/* Veteran Status Section */}
            <section className="space-y-3 pt-4 border-t border-[#159BA1]/40">
              <p>
                If you believe you belong to any of the categories of protected veterans listed below, please indicate by making the appropriate selection. As a government contractor subject to the Vietnam Era Veterans&apos; Readjustment Assistance Act (VEVRAA), we request this information in order to measure the effectiveness of our outreach and positive recruitment efforts we undertake pursuant to VEVRAA.
              </p>
              <p>
                A <strong>&quot;disabled veteran&quot;</strong> is one of the following: a veteran of the U.S. military, ground, naval or air service who is entitled to compensation (or who but for the receipt of military retired pay would be entitled to compensation) under laws administered by the Secretary of Veterans Affairs; or a person who was discharged or released from active duty because of a service-connected disability.
              </p>
              <p>
                A <strong>&quot;recently separated veteran&quot;</strong> means any veteran during the three-year period beginning on the date of such veteran&apos;s discharge or release from active duty in the U.S. military, ground, naval, or air service.
              </p>
              <p>
                An <strong>&quot;active duty wartime or campaign badge veteran&quot;</strong> means a veteran who served on active duty in the U.S. military, ground, naval or air service during a war, or in a campaign or expedition for which a campaign badge has been authorized under the laws administered by the Department of Defense.
              </p>
              <p>
                An <strong>&quot;Armed Forces service medal veteran&quot;</strong> means a veteran who, while serving on active duty in the U.S. military, ground, naval or air service, participated in a United States military operation for which an Armed Forces service medal was awarded pursuant to Executive Order 12985.
              </p>

              <div className="pt-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1 font-display">Veteran Status</label>
                <select className="block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display">
                  <option value="">-- Please Select --</option>
                  <option value="protected">I identify as one or more of the classifications of protected veteran</option>
                  <option value="not_veteran">I am not a protected veteran</option>
                  <option value="decline">I don&apos;t wish to answer</option>
                </select>
              </div>
            </section>

            {/* General Demographic Self-Identification */}
            <section className="space-y-4 pt-4 border-t border-[#159BA1]/40">
              <h2 className="text-lg font-bold text-[#0E162B] font-display">Voluntary Self-Identification</h2>
              <p>
                For government reporting purposes, we ask candidates to respond to the below self-identification survey. Completion of the form is entirely voluntary. Whatever your decision, it will not be considered in the hiring process or thereafter. Any information that you provide will be recorded and maintained in a confidential file.
              </p>
              <p>
                As set forth in SRK Care at Home&apos;s Equal Employment Opportunity policy, we do not discriminate on the basis of any protected group status under any applicable law.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 font-display">Race</label>
                  <select className="block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display">
                    <option value="">-- Please Select --</option>
                    <option value="white">White (Not Hispanic or Latino)</option>
                    <option value="black">Black or African American (Not Hispanic or Latino)</option>
                    <option value="hispanic">Hispanic or Latino</option>
                    <option value="asian">Asian (Not Hispanic or Latino)</option>
                    <option value="native_american">American Indian or Alaska Native (Not Hispanic or Latino)</option>
                    <option value="hawaiian">Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)</option>
                    <option value="two_or_more">Two or More Races (Not Hispanic or Latino)</option>
                    <option value="decline">I don&apos;t wish to answer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 font-display">Gender</label>
                  <select className="block w-full rounded border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-[#159BA1] focus:ring-[#159BA1] font-display">
                    <option value="">-- Please Select --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="decline">I don&apos;t wish to answer</option>
                  </select>
                </div>
              </div>
            </section>

          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button type="submit" className="bg-[#E57531] hover:bg-[#0C447C] text-white font-bold text-sm py-3 px-6 rounded shadow transition w-full sm:w-auto font-display">
              Submit Application
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="max-w-3xl mx-auto mt-12 pt-6 border-t border-gray-300 text-center text-[11px] text-gray-500 space-x-2 font-display">
        <a href="#" className="hover:underline">Site Search</a> <span>•</span>
        <a href="#" className="hover:underline">Sitemap</a> <span>•</span>
        <a href="#" className="hover:underline">Cookies</a> <span>•</span>
        <a href="#" className="hover:underline">Corporate Site</a> <span>•</span>
        <a href="#" className="hover:underline">Terms and Conditions</a> <span>•</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <p className="mt-2">© SRK Care at Home, All rights reserved.</p>
      </footer>
    </div>
  );
}

/* Skeleton fallback shown while the search params resolve — mirrors the form layout to avoid layout shift */
function ApplicationFormSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-display">
      <div className="max-w-3xl mx-auto space-y-6 animate-pulse">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center space-y-3">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-6 w-56 bg-gray-200 rounded" />
          <div className="h-4 w-72 bg-gray-100 rounded" />
        </div>

        <div className="bg-[#159BA1]/5 p-6 rounded-lg shadow-sm border border-[#159BA1]/30 space-y-4">
          <div className="h-5 w-44 bg-gray-200 rounded" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="h-3 w-24 bg-gray-200 rounded" />
              <div className="h-9 w-full bg-white border border-gray-200 rounded" />
            </div>
          ))}
        </div>

        <div className="bg-[#159BA1]/5 p-6 rounded-lg shadow-sm border border-[#159BA1]/30 space-y-3">
          <div className="h-5 w-64 bg-gray-200 rounded" />
          <div className="h-3 w-full bg-gray-100 rounded" />
          <div className="h-3 w-5/6 bg-gray-100 rounded" />
          <div className="h-3 w-4/6 bg-gray-100 rounded" />
        </div>

        <div className="h-11 w-full sm:w-44 bg-gray-300 rounded" />
      </div>
    </div>
  );
}