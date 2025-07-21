import { useState } from 'react';
import {
  Link,
  PhoneForwarded,
  PhoneOff,
  CheckCircle,
  PhoneIncoming,
  PhoneOutgoing
} from 'lucide-react';

const mockCalls = [
  {
    id: 'call_001',
    phone: '(604) 123-4567',
    date: '2025-07-19',
    time: '10:30 AM',
    duration: '3m 45s',
    outcome: 'Link Sent',
    source: 'Inbound'
  },
  {
    id: 'call_002',
    phone: '(778) 987-6543',
    date: '2025-07-20',
    time: '2:15 PM',
    duration: '1m 30s',
    outcome: 'Transferred to Staff',
    source: 'Inbound'
  },
  {
    id: 'call_003',
    phone: '(604) 111-2222',
    date: '2025-07-18',
    time: '9:00 AM',
    duration: '0s',
    outcome: 'Hung Up',
    source: 'Missed'
  }
];

export default function Calls() {
  const [calls] = useState(mockCalls);

  const getOutcomeStyle = (outcome: string) => {
    switch (outcome) {
      case 'Link Sent':
        return 'bg-green-100 text-green-700';
      case 'Transferred to Staff':
        return 'bg-blue-100 text-blue-700';
      case 'Hung Up':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getOutcomeIcon = (outcome: string) => {
    switch (outcome) {
      case 'Link Sent':
        return <Link className="w-4 h-4 mr-1" />;
      case 'Transferred to Staff':
        return <PhoneForwarded className="w-4 h-4 mr-1" />;
      case 'Hung Up':
        return <PhoneOff className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'Inbound':
        return <PhoneIncoming className="w-4 h-4 mr-1" />;
      case 'Missed':
        return <PhoneOff className="w-4 h-4 mr-1" />;
      case 'Callback':
        return <PhoneOutgoing className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-1">📞 Recent Calls</h1>
        <p className="text-gray-500 text-sm">See how recent calls were handled for your clinic.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase tracking-wide text-xs">
            <tr>
              <th className="px-5 py-3 text-left">Phone Number</th>
              <th className="px-5 py-3 text-left">Date</th>
              <th className="px-5 py-3 text-left">Time</th>
              <th className="px-5 py-3 text-left">Duration</th>
              <th className="px-5 py-3 text-left">Outcome</th>
              <th className="px-5 py-3 text-left">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {calls.map(call => (
              <tr key={call.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3 text-gray-900">{call.phone}</td>
                <td className="px-5 py-3 text-gray-700">{call.date}</td>
                <td className="px-5 py-3 text-gray-700">{call.time}</td>
                <td className="px-5 py-3 text-gray-700">{call.duration}</td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getOutcomeStyle(call.outcome)}`}
                  >
                    {getOutcomeIcon(call.outcome)}
                    {call.outcome}
                  </span>
                </td>
                <td className="px-5 py-3 text-gray-700 flex items-center">
                  {getSourceIcon(call.source)}
                  <span>{call.source}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
