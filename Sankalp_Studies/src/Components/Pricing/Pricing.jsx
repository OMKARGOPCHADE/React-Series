export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-100 dark:bg-gray-800 px-4">
      <h3 className="text-3xl font-semibold text-center mb-10">Fees Structure</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 text-center text-sm md:text-base bg-white dark:bg-gray-900">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-4 py-2 border">Particulars</th>
              <th className="px-4 py-2 border">Fees (1 Month)</th>
              <th className="px-4 py-2 border">Fees (3 Months)</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-200">
            <tr className="border-t">
              <td className="px-4 py-2 border">Day</td>
              <td className="px-4 py-2 border">₹700/-</td>
              <td className="px-4 py-2 border">₹1800/-</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">Reservation</td>
              <td className="px-4 py-2 border">₹900/-</td>
              <td className="px-4 py-2 border">₹2400/-</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">Day + Night</td>
              <td className="px-4 py-2 border">₹1000/-</td>
              <td className="px-4 py-2 border">₹2600/-</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">Day + Night Reservation</td>
              <td className="px-4 py-2 border">₹1200/-</td>
              <td className="px-4 py-2 border">₹3000/-</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">Night</td>
              <td className="px-4 py-2 border">₹400/-</td>
              <td className="px-4 py-2 border">₹1000/-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes Section */}
      <div className="mt-6 text-sm text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center">
        <p>⚠️ एकदा भरलेली फी परत मिळणार नाही व त्याच्या जागी इतर कुणालाही प्रवेश दिला जाणार नाही.</p>
        <p>⏰ Day time सकाळी 6 ते रात्री 10 पर्यंत असेल.</p>
      </div>
    </section>
  )
}
