import { Settings, Key, Link2, TestTube, CheckCircle2, Code, AlertTriangle } from 'lucide-react';

export function ImplementationGuide() {
  return (
    <div className="space-y-8">
      {/* Setup Steps */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Implementation Guide</h3>
          <p className="text-slate-600">Step-by-step setup for the Metronome-Stripe integration</p>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Key className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-slate-900 text-lg">Authenticate Stripe Account from Metronome</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Grant Metronome permissions to write and read data to your Stripe account.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-slate-700 mb-2 font-semibold">Actions:</p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Go to General Settings → Integrations in Metronome app</li>
                    <li>• Click <strong>Enable</strong> next to Stripe</li>
                    <li>• Complete the Stripe authorization wizard</li>
                    <li>• Repeat for each environment (production, sandbox)</li>
                  </ul>
                  <div className="mt-3 bg-blue-50 p-2 rounded text-xs text-slate-600">
                    <strong>Note:</strong> Sandbox environments automatically connect to Stripe test mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <h4 className="font-bold text-slate-900 text-lg">Enable Stripe Smart Retries</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Configure Stripe's automatic payment retry capabilities to improve payment success rates.
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-sm text-slate-700 mb-2 font-semibold">Actions:</p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Log into Stripe Dashboard</li>
                    <li>• Navigate to Settings → Billing</li>
                    <li>• Enable "Smart Retries" for automatic retry logic</li>
                    <li>• Configure retry timing and dunning email settings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Link2 className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-slate-900 text-lg">Configure Global Integration Settings</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Set up invoice behavior and presentation preferences in Metronome.
                </p>
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <p className="text-sm text-slate-700 mb-2 font-semibold">Optional Settings:</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• <strong>Invoice due date:</strong> Set custom due date (default: 30 days)</li>
                    <li>• <strong>Leave invoices as drafts:</strong> Manual review before finalization</li>
                    <li>• <strong>Skip zero-total invoices:</strong> Don't send invoices below minimum</li>
                    <li>• <strong>Align effective_at:</strong> Set to last day of billing period</li>
                    <li>• <strong>Display zero quantity line items:</strong> Show all charges</li>
                    <li>• <strong>Always display quantities:</strong> Show quantity in descriptions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-l-4 border-amber-500 bg-amber-50 rounded-r-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-slate-900 text-lg">Set Customer Billing Configuration</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Configure which customers should be invoiced through Stripe.
                </p>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-slate-700 mb-3 font-semibold">Via API - Single Stripe Account:</p>
                  <pre className="bg-slate-900 text-slate-100 p-3 rounded text-xs overflow-x-auto">
{`POST /v1/customers
{
  "name": "Example, Inc.",
  "customer_billing_provider_configurations": [{
    "billing_provider": "stripe",
    "configuration": {
      "stripe_customer_id": "cus_456",
      "stripe_collection_method": "charge_automatically"
    },
    "delivery_method": "direct_to_billing_provider"
  }]
}`}</pre>
                  <p className="text-sm text-slate-700 mb-2 mt-4 font-semibold">Via API - Multi-Entity (Multiple Stripe Accounts):</p>
                  <pre className="bg-slate-900 text-slate-100 p-3 rounded text-xs overflow-x-auto">
{`POST /v1/setCustomerBillingProviderConfigurations
{
  "data": [{
    "customer_id": "4db51251-61de-4bfe-b9ce-495e244f3491",
    "billing_provider": "stripe",
    "configuration": {
      "stripe_customer_id": "cus_1234",
      "stripe_collection_method": "send_invoice"
    },
    "delivery_method_id": "5b95d955-b705-41c8-9d2e-34ccbdee5193"
  }]
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                5
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-bold text-slate-900 text-lg">(Optional) Configure Entity Mapping Rules</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Add custom metadata to Stripe entities for advanced use cases.
                </p>
                <div className="bg-white rounded-lg p-4 border border-indigo-200">
                  <p className="text-sm text-slate-700 mb-2 font-semibold">Example: Map Line Items to Stripe Products</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>1. Create custom field key on Metronome product: <code className="bg-slate-100 px-1">stripe_product_id</code></li>
                    <li>2. Set value for each product in Metronome</li>
                    <li>3. In Integrations page, map custom field to Stripe <code className="bg-slate-100 px-1">invoiceitem.price</code></li>
                  </ul>
                  <div className="mt-3 bg-indigo-50 p-2 rounded text-xs text-slate-600">
                    <strong>Other use cases:</strong> Map contract fields to Stripe invoice custom fields, add metadata for tax calculations
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="border-l-4 border-rose-500 bg-rose-50 rounded-r-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-rose-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                6
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-rose-600" />
                  <h4 className="font-bold text-slate-900 text-lg">Set Up Error Monitoring</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Listen for invoicing errors to ensure proper customer billing.
                </p>
                <div className="bg-white rounded-lg p-4 border border-rose-200">
                  <p className="text-sm text-slate-700 mb-2 font-semibold">Actions:</p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• Subscribe to <code className="bg-slate-100 px-1">invoice.billing_provider_error</code> webhook type</li>
                    <li>• Configure internal alerts when errors occur</li>
                    <li>• Common errors: Stripe customer doesn't exist, API key issues</li>
                    <li>• Set up monitoring dashboard for integration health</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                7
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <TestTube className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-slate-900 text-lg">Test End-to-End</h4>
                </div>
                <p className="text-slate-700 mb-3">
                  Verify the integration works correctly before production use.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-slate-700 mb-2 font-semibold">Testing Checklist:</p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>✓ Create test customer with billing_configuration in Metronome</li>
                    <li>✓ Ingest usage events for the customer</li>
                    <li>✓ Finalize invoice in Metronome (end of billing period)</li>
                    <li>✓ Verify invoice appears in Stripe with correct line items</li>
                    <li>✓ Test payment collection (use Stripe test cards)</li>
                    <li>✓ Confirm webhook updates invoice status in Metronome</li>
                    <li>✓ Test both charge_automatically and send_invoice methods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stripe Limitations */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">How Metronome Handles Stripe Limitations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Stripe Limitation</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Metronome Approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300">
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-700 font-semibold">Decimal quantities not supported</td>
                <td className="px-4 py-3 text-slate-600">
                  If any line item has decimal quantity, Metronome sets quantity as 1 for all line items and shows true quantity in description
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-700 font-semibold">Maximum 250 line items per invoice</td>
                <td className="px-4 py-3 text-slate-600">
                  If invoice exceeds 250 line items, Metronome collapses into single line item with company name and total price
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-700 font-semibold">Maximum charge: $999,999.99 USD</td>
                <td className="px-4 py-3 text-slate-600">
                  Metronome generates error. Contact Stripe and Metronome to increase limit if needed
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-700 font-semibold">Minimum charge amounts by currency</td>
                <td className="px-4 py-3 text-slate-600">
                  Use "skip zero-total invoices" setting to avoid sending invoices below minimum (e.g., $0.50 for USD)
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-700 font-semibold">No native credit memo support</td>
                <td className="px-4 py-3 text-slate-600">
                  Metronome integration does not natively support issuing credit memos in Stripe
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white">
        <h3 className="text-xl font-bold mb-6 text-center">Advanced Integration Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3 text-blue-300">Multi-Entity Billing</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Connect Metronome to multiple Stripe accounts</li>
              <li>• Manage billing for distinct business units</li>
              <li>• Use delivery_method_id to specify Stripe account</li>
              <li>• Create aliases for each account (e.g., "Stripe NA", "Stripe EU")</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 text-emerald-300">Tax Calculation Integration</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Support for Anrok, Avalara, and Stripe Tax</li>
              <li>• Automatic tax calculation on Stripe invoices</li>
              <li>• 1-hour wait for tax application (configurable)</li>
              <li>• Option to leave invoices as drafts if tax fails</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 text-purple-300">Contract-Level Billing</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Configure billing settings per contract</li>
              <li>• Send PAYG contracts via Stripe, enterprise via AWS</li>
              <li>• Use /contracts/create endpoint with billing config</li>
              <li>• Override customer-level settings</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 text-amber-300">Status Tracking</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Track invoice statuses via webhook events</li>
              <li>• Access via /listInvoices API endpoint</li>
              <li>• Export to data warehouse via Metronome data export</li>
              <li>• Statuses: FINALIZED, PAID, PAYMENT_FAILED, etc.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Collection Methods */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Choosing the Right Collection Method</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-emerald-300 bg-emerald-50 rounded-lg p-5">
            <h4 className="font-bold text-emerald-900 mb-3 text-lg">charge_automatically</h4>
            <p className="text-sm text-slate-700 mb-3">
              Best for SaaS, pay-as-you-go, and subscription customers
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Immediate payment collection</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Reduces payment delays</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Automatic retry on failure</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Requires payment method on file</span>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3 text-lg">send_invoice</h4>
            <p className="text-sm text-slate-700 mb-3">
              Best for enterprise customers with net payment terms
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Email with payment link sent</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Configurable payment terms (default: 30 days)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Automatic reminders for overdue</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">No payment method required upfront</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
