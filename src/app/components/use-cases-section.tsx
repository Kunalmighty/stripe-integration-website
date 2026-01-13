import { Sparkles, Zap, BarChart3, Clock, DollarSign, Bell } from 'lucide-react';

export function UseCasesSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Integration Use Cases & Benefits</h3>
        <p className="text-slate-600">Why combine Metronome's usage-based billing with Stripe's payment infrastructure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* SaaS Companies */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 text-white rounded-lg p-3">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">SaaS with Usage-Based Pricing</h4>
          </div>
          <p className="text-slate-700 mb-4">
            Perfect for companies that charge based on API calls, data storage, compute hours, or other metered usage.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Track unlimited usage dimensions in Metronome</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Complex pricing rules (tiers, credits, commitments)</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Automatic invoice generation and payment collection</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Stripe handles all payment methods and compliance</span>
            </li>
          </ul>
        </div>

        {/* Infrastructure Platforms */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 text-white rounded-lg p-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Infrastructure & Cloud Platforms</h4>
          </div>
          <p className="text-slate-700 mb-4">
            Ideal for infrastructure providers billing on resource consumption like compute, bandwidth, or storage.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Real-time usage ingestion from infrastructure</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Granular billing down to the second or byte</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Handle massive scale with millions of events</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <span>Leverage Stripe's global payment network</span>
            </li>
          </ul>
        </div>

        {/* API-First Companies */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-2 border-emerald-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-600 text-white rounded-lg p-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">API-First Businesses</h4>
          </div>
          <p className="text-slate-700 mb-4">
            Built for companies monetizing APIs with pay-per-request or consumption-based models.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Track API calls, tokens, or requests in real-time</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Flexible rate plans (per request, tiered, hybrid)</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Prepaid credits and commitment-based billing</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Instant payment processing through Stripe</span>
            </li>
          </ul>
        </div>

        {/* Hybrid Models */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-600 text-white rounded-lg p-3">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Hybrid Subscription Models</h4>
          </div>
          <p className="text-slate-700 mb-4">
            Perfect for combining fixed subscriptions with variable usage charges on a single invoice.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Base subscription + usage overage charges</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Unified billing across subscription and usage</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Included allowances with additional charges</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Single customer experience via Stripe portal</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white">
        <h4 className="text-xl font-bold mb-6 text-center">Key Integration Benefits</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h5 className="font-bold mb-2">Automated Workflow</h5>
            <p className="text-sm text-slate-300">
              Eliminate manual invoice creation. Usage flows from Metronome to Stripe automatically.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h5 className="font-bold mb-2">Revenue Accuracy</h5>
            <p className="text-sm text-slate-300">
              Real-time revenue recognition with precise usage tracking and payment reconciliation.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6" />
            </div>
            <h5 className="font-bold mb-2">Better Customer Experience</h5>
            <p className="text-sm text-slate-300">
              Customers get detailed usage breakdowns with the reliability of Stripe's payment platform.
            </p>
          </div>
        </div>
      </div>

      {/* Integration Features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h5 className="font-bold text-slate-900 mb-3">What Metronome Handles</h5>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Usage event ingestion and aggregation</li>
            <li>• Complex pricing calculations and billing logic</li>
            <li>• Credits, commitments, and contract management</li>
            <li>• Invoice generation with detailed line items</li>
            <li>• Revenue recognition and analytics</li>
          </ul>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
          <h5 className="font-bold text-slate-900 mb-3">What Stripe Handles</h5>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Payment method management and storage</li>
            <li>• Payment processing and collection</li>
            <li>• Failed payment retry logic</li>
            <li>• Customer billing portal and self-service</li>
            <li>• Global payment compliance and tax</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
