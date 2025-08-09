import { ShieldCheck, CreditCard, FileCheck2 } from 'lucide-react'

export default function LICServices() {
  return (
    <section id="lic" className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
      <h3 className="text-3xl font-semibold text-blue-900 dark:text-white mb-6">LIC Services</h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        संकल्प अभ्यासिका आता LIC पॉलिसी सल्ला आणि सेवा देखील देते.
        आमच्याकडे अनुभवी सल्लागार आहेत जे आपल्यासाठी योग्य योजना निवडण्यास मदत करतील.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Policy Guidance */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-left">
          <div className="flex items-center mb-3">
            <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h4 className="text-xl font-bold">Policy Guidance</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Retirement, child plans, term insurance – आम्ही तुम्हाला योग्य सल्ला देतो.
          </p>
        </div>

        {/* Premium Help */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-left">
          <div className="flex items-center mb-3">
            <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h4 className="text-xl font-bold">Premium Payment Help</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            वेळेत प्रीमियम भरण्याची माहिती व मदत आमच्याकडे उपलब्ध आहे.
          </p>
        </div>

        {/* Claim Help */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-left">
          <div className="flex items-center mb-3">
            <FileCheck2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h4 className="text-xl font-bold">Claim Assistance</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Policy claim साठी आवश्यक मार्गदर्शन आणि डॉक्युमेंटेशन सपोर्ट.
          </p>
        </div>
      </div>
    </section>
  )
}
