import { ArrowRight, Database, Server, Globe, Shield, Webhook } from 'lucide-react';

export function DataFlowDiagram() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Data Flow & API Architecture</h3>
        <p className="text-slate-600">Detailed view of how data moves between systems via APIs and webhooks</p>
      </div>

      {/* Metronome to Stripe Flow */}
      <div className="mb-12">
        <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-blue-600" />
          Metronome → Stripe (Outbound)
        </h4>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5" />
                <span className="font-bold">Metronome</span>
              </div>
              <div className="text-sm opacity-90">Billing Configuration Set</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-lg p-3 w-full text-center border-2 border-purple-300">
                <div className="font-semibold text-purple-900 text-sm mb-1">POST /v1/customers</div>
                <div className="text-xs text-purple-700">Metronome API</div>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 my-2 md:rotate-0 rotate-90" />
            </div>
            
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5" />
                <span className="font-bold">Configuration Stored</span>
              </div>
              <div className="text-sm opacity-90">stripe_customer_id mapped</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5" />
                <span className="font-bold">Metronome</span>
              </div>
              <div className="text-sm opacity-90">Invoice Finalized</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-lg p-3 w-full text-center border-2 border-purple-300">
                <div className="font-semibold text-purple-900 text-sm mb-1">Stripe Invoice API</div>
                <div className="text-xs text-purple-700">Auto-triggered</div>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 my-2 md:rotate-0 rotate-90" />
            </div>
            
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5" />
                <span className="font-bold">Stripe</span>
              </div>
              <div className="text-sm opacity-90">Invoice Created</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stripe to Metronome Flow */}
      <div className="mb-12">
        <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-indigo-600 rotate-180" />
          Stripe → Metronome (Inbound via Webhooks)
        </h4>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5" />
                <span className="font-bold">Stripe</span>
              </div>
              <div className="text-sm opacity-90">Payment Succeeded</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-lg p-3 w-full text-center border-2 border-purple-300">
                <div className="font-semibold text-purple-900 text-sm mb-1">invoice.payment_succeeded</div>
                <div className="text-xs text-purple-700">Webhook Event</div>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 my-2 md:rotate-0 rotate-90" />
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5" />
                <span className="font-bold">Metronome</span>
              </div>
              <div className="text-sm opacity-90">Status: PAID</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5" />
                <span className="font-bold">Stripe</span>
              </div>
              <div className="text-sm opacity-90">Payment Failed</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 rounded-lg p-3 w-full text-center border-2 border-purple-300">
                <div className="font-semibold text-purple-900 text-sm mb-1">invoice.payment_failed</div>
                <div className="text-xs text-purple-700">Webhook Event</div>
              </div>
              <ArrowRight className="w-6 h-6 text-purple-600 my-2 md:rotate-0 rotate-90" />
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5" />
                <span className="font-bold">Metronome</span>
              </div>
              <div className="text-sm opacity-90">Status: PAYMENT_FAILED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Webhook Events Table */}
      <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Webhook className="w-6 h-6 text-purple-600" />
          <h4 className="text-lg font-bold text-slate-900">Stripe Webhook Events Tracked by Metronome</h4>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Stripe Webhook Event</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Trigger</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">external_status in Metronome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300">
              <tr className="hover:bg-white">
                <td className="px-4 py-3 font-mono text-purple-700">invoice.finalized</td>
                <td className="px-4 py-3 text-slate-700">Invoice finalized in Stripe</td>
                <td className="px-4 py-3 text-slate-700 font-semibold">FINALIZED</td>
              </tr>
              <tr className="hover:bg-white">
                <td className="px-4 py-3 font-mono text-purple-700">invoice.payment_succeeded</td>
                <td className="px-4 py-3 text-slate-700">Customer payment successful</td>
                <td className="px-4 py-3 text-slate-700 font-semibold">PAID</td>
              </tr>
              <tr className="hover:bg-white">
                <td className="px-4 py-3 font-mono text-purple-700">invoice.paid</td>
                <td className="px-4 py-3 text-slate-700">Invoice marked as paid</td>
                <td className="px-4 py-3 text-slate-700 font-semibold">PAID</td>
              </tr>
              <tr className="hover:bg-white">
                <td className="px-4 py-3 font-mono text-purple-700">invoice.payment_failed</td>
                <td className="px-4 py-3 text-slate-700">Payment attempt failed</td>
                <td className="px-4 py-3 text-slate-700 font-semibold">PAYMENT_FAILED</td>
              </tr>
              <tr className="hover:bg-white">
                <td className="px-4 py-3 font-mono text-purple-700">invoice.marked_uncollectible</td>
                <td className="px-4 py-3 text-slate-700">Invoice marked uncollectible</td>
                <td className="px-4 py-3 text-slate-700 font-semibold">UNCOLLECTIBLE</td>
              </tr>
              <tr className="hover:bg-white">
                <td className="px-4 py-3 font-mono text-purple-700">invoice.voided</td>
                <td className="px-4 py-3 text-slate-700">Invoice voided</td>
                <td className="px-4 py-3 text-slate-700 font-semibold">VOID</td>
              </tr>
              <tr className="hover:bg-white">
                <td className="px-4 py-3 font-mono text-purple-700">invoice.deleted</td>
                <td className="px-4 py-3 text-slate-700">Invoice deleted</td>
                <td className="px-4 py-3 text-slate-700 font-semibold">DELETED</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-slate-700">
            <strong>Note:</strong> If "Leave invoices as drafts" is enabled globally, Stripe does not return a status and no webhook is sent.
          </p>
        </div>
      </div>

      {/* API Endpoints Reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-5 h-5 text-blue-600" />
            <h5 className="font-bold text-slate-900">Metronome API Endpoints</h5>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="font-mono text-blue-700">POST /v1/customers</li>
            <li className="text-xs text-slate-600 ml-4">Create customer with billing configuration</li>
            <li className="font-mono text-blue-700 mt-2">POST /v1/setCustomerBillingProviderConfigurations</li>
            <li className="text-xs text-slate-600 ml-4">Update existing customer billing config</li>
            <li className="font-mono text-blue-700 mt-2">GET /v1/listInvoices</li>
            <li className="text-xs text-slate-600 ml-4">Fetch invoices with external_status</li>
            <li className="font-mono text-blue-700 mt-2">GET /v1/listConfiguredBillingProviders</li>
            <li className="text-xs text-slate-600 ml-4">Get delivery_method_id for multi-entity</li>
          </ul>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-indigo-600" />
            <h5 className="font-bold text-slate-900">Integration Details</h5>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Metronome uses Stripe API to create invoices</li>
            <li>• Stripe sends webhooks to Metronome endpoint</li>
            <li>• Webhook endpoint configured during setup</li>
            <li>• Listen for invoice.billing_provider_error webhooks</li>
            <li>• Custom field mapping via entity mapping rules</li>
            <li>• Support for multiple Stripe accounts (multi-entity)</li>
          </ul>
        </div>
      </div>

      {/* Collection Methods */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-white">
        <h4 className="text-lg font-bold mb-4">Stripe Collection Methods</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h5 className="font-bold text-emerald-300 mb-2">charge_automatically</h5>
            <p className="text-sm text-slate-300 mb-3">
              Stripe automatically charges the customer's default payment method when invoice is finalized.
            </p>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>• Best for recurring/subscription customers</li>
              <li>• Immediate payment collection</li>
              <li>• Requires payment method on file</li>
              <li>• Smart Retries for failed payments</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h5 className="font-bold text-blue-300 mb-2">send_invoice</h5>
            <p className="text-sm text-slate-300 mb-3">
              Stripe emails the invoice to the customer with payment instructions and a link to pay.
            </p>
            <ul className="space-y-1 text-xs text-slate-400">
              <li>• Best for enterprise/net-terms customers</li>
              <li>• Customer pays via invoice link</li>
              <li>• Configurable days_until_due (default: 30)</li>
              <li>• Email reminders for overdue invoices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
