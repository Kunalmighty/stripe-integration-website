import { useState } from 'react';
import { ArrowRight, Database, Cloud, Zap, RefreshCw, FileText, CreditCard, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { WorkflowSequence } from './workflow-sequence';
import { DataFlowDiagram } from './data-flow-diagram';
import { UseCasesSection } from './use-cases-section';
import { ImplementationGuide } from './implementation-guide';

interface TooltipContent {
  title: string;
  description: string;
}

export function MetronomeStripeArchitecture() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'dataflow' | 'usecases' | 'implementation'>('overview');

  const tooltips: Record<string, TooltipContent> = {
    metronome: {
      title: 'Metronome',
      description: 'Usage-based billing platform that tracks usage, calculates charges, and finalizes invoices at the end of each billing period.'
    },
    stripe: {
      title: 'Stripe',
      description: 'Payment processing platform. Metronome automatically creates invoices in Stripe to collect payment when invoices finalize.'
    },
    sync: {
      title: 'Automatic Invoice Creation',
      description: 'When an invoice finalizes in Metronome, a corresponding Stripe invoice is automatically created for payment collection.'
    },
    webhook: {
      title: 'Webhook Events',
      description: 'Stripe sends webhook events (invoice.paid, invoice.payment_failed, etc.) back to Metronome to update invoice statuses.'
    },
    customer: {
      title: 'Billing Configuration',
      description: 'Customer billing_configuration determines which invoices to send to Stripe and includes Stripe customer ID and collection method.'
    },
    invoice: {
      title: 'Invoice Finalization',
      description: 'At billing period end, Metronome finalizes invoice and automatically creates it in Stripe based on customer billing configuration.'
    },
    payment: {
      title: 'Payment Collection',
      description: 'Stripe collects payment via charge_automatically (auto-charge) or send_invoice (email with payment instructions).'
    }
  };

  return (
    <div className="min-h-screen p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Metronome + Stripe Integration Architecture
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive architecture showing how Metronome's usage-based billing integrates 
            with Stripe's payment infrastructure for automated invoicing and payment collection
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-2 inline-flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Architecture Overview
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'workflow'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Workflow Sequence
            </button>
            <button
              onClick={() => setActiveTab('dataflow')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'dataflow'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Data Flow & APIs
            </button>
            <button
              onClick={() => setActiveTab('usecases')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'usecases'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Use Cases
            </button>
            <button
              onClick={() => setActiveTab('implementation')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'implementation'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Implementation
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
        {/* Main Architecture Diagram */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Metronome System */}
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-2xl transition-all"
                onMouseEnter={() => setActiveTooltip('metronome')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <Database className="w-12 h-12" />
                  <Cloud className="w-8 h-8 opacity-70" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Metronome</h2>
                <p className="text-blue-100 text-sm mb-4">Usage-Based Billing Platform</p>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-600/50 rounded-lg p-2">
                    <div className="font-semibold">Usage Tracking</div>
                  </div>
                  <div className="bg-blue-600/50 rounded-lg p-2">
                    <div className="font-semibold">Billing Logic</div>
                  </div>
                  <div className="bg-blue-600/50 rounded-lg p-2">
                    <div className="font-semibold">Invoice Generation</div>
                  </div>
                  <div className="bg-blue-600/50 rounded-lg p-2">
                    <div className="font-semibold">Customer Management</div>
                  </div>
                </div>
              </div>
              
              {activeTooltip === 'metronome' && (
                <div className="absolute z-10 top-full mt-2 left-0 right-0 bg-slate-900 text-white p-4 rounded-lg shadow-xl">
                  <h3 className="font-bold mb-1">{tooltips.metronome.title}</h3>
                  <p className="text-sm text-slate-300">{tooltips.metronome.description}</p>
                </div>
              )}
            </div>

            {/* Integration Layer */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-full bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-center mb-4">
                  <Zap className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-bold text-slate-900">Integration Layer</h3>
                </div>
                
                <div className="space-y-3">
                  <div 
                    className="bg-white rounded-lg p-3 border border-purple-200 cursor-pointer hover:bg-purple-50 transition-colors"
                    onMouseEnter={() => setActiveTooltip('sync')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold">Bi-directional Sync</span>
                    </div>
                    {activeTooltip === 'sync' && (
                      <div className="mt-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                        {tooltips.sync.description}
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className="bg-white rounded-lg p-3 border border-purple-200 cursor-pointer hover:bg-purple-50 transition-colors"
                    onMouseEnter={() => setActiveTooltip('webhook')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold">Webhooks</span>
                    </div>
                    {activeTooltip === 'webhook' && (
                      <div className="mt-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                        {tooltips.webhook.description}
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-purple-200">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-semibold">API Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stripe System */}
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-2xl transition-all"
                onMouseEnter={() => setActiveTooltip('stripe')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <CreditCard className="w-12 h-12" />
                  <CheckCircle className="w-8 h-8 opacity-70" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Stripe</h2>
                <p className="text-indigo-100 text-sm mb-4">Payment Processing Platform</p>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-indigo-700/50 rounded-lg p-2">
                    <div className="font-semibold">Payment Collection</div>
                  </div>
                  <div className="bg-indigo-700/50 rounded-lg p-2">
                    <div className="font-semibold">Invoice Delivery</div>
                  </div>
                  <div className="bg-indigo-700/50 rounded-lg p-2">
                    <div className="font-semibold">Customer Portal</div>
                  </div>
                  <div className="bg-indigo-700/50 rounded-lg p-2">
                    <div className="font-semibold">Financial Reporting</div>
                  </div>
                </div>
              </div>
              
              {activeTooltip === 'stripe' && (
                <div className="absolute z-10 top-full mt-2 left-0 right-0 bg-slate-900 text-white p-4 rounded-lg shadow-xl">
                  <h3 className="font-bold mb-1">{tooltips.stripe.title}</h3>
                  <p className="text-sm text-slate-300">{tooltips.stripe.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* Data Flow Arrows */}
          <div className="hidden lg:block relative h-24 mb-8">
            <svg className="w-full h-full" viewBox="0 0 1200 100">
              {/* Metronome to Stripe */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#7c3aed" />
                </marker>
              </defs>
              <path
                d="M 400 30 Q 600 10, 800 30"
                stroke="#7c3aed"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <text x="600" y="15" fontSize="14" fill="#7c3aed" textAnchor="middle" fontWeight="600">
                Customer & Invoice Data
              </text>
              
              {/* Stripe to Metronome */}
              <path
                d="M 800 70 Q 600 90, 400 70"
                stroke="#7c3aed"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
              <text x="600" y="100" fontSize="14" fill="#7c3aed" textAnchor="middle" fontWeight="600">
                Payment Status & Events
              </text>
            </svg>
          </div>
        </div>

        {/* Detailed Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Customer Flow */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900">Customer Flow</h3>
            </div>
            
            <div className="space-y-4">
              <div 
                className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg cursor-pointer hover:bg-emerald-100 transition-colors"
                onMouseEnter={() => setActiveTooltip('customer')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Customer Created in Metronome</h4>
                    <p className="text-sm text-slate-600">Customer record is created with billing details and usage tracking enabled</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-slate-400" />
              </div>
              
              <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Auto-Sync to Stripe</h4>
                    <p className="text-sm text-slate-600">Customer data automatically synced to Stripe via API integration</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-slate-400" />
              </div>
              
              <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Stripe Customer Portal Active</h4>
                    <p className="text-sm text-slate-600">Customer can manage payment methods and view invoices in Stripe</p>
                  </div>
                </div>
              </div>
              
              {activeTooltip === 'customer' && (
                <div className="bg-slate-900 text-white p-4 rounded-lg">
                  <h3 className="font-bold mb-1">{tooltips.customer.title}</h3>
                  <p className="text-sm text-slate-300">{tooltips.customer.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* Invoice & Payment Flow */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Invoice & Payment Flow</h3>
            </div>
            
            <div className="space-y-4">
              <div 
                className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg cursor-pointer hover:bg-blue-100 transition-colors"
                onMouseEnter={() => setActiveTooltip('invoice')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Metronome Generates Invoice</h4>
                    <p className="text-sm text-slate-600">Based on usage data and billing schedule, invoice is created</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-slate-400" />
              </div>
              
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Invoice Sent to Stripe</h4>
                    <p className="text-sm text-slate-600">Invoice details transmitted to Stripe for payment collection</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-slate-400" />
              </div>
              
              <div 
                className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg cursor-pointer hover:bg-blue-100 transition-colors"
                onMouseEnter={() => setActiveTooltip('payment')}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1">Stripe Processes Payment</h4>
                    <p className="text-sm text-slate-600">Payment collected and status synced back to Metronome</p>
                  </div>
                </div>
              </div>
              
              {(activeTooltip === 'invoice' || activeTooltip === 'payment') && (
                <div className="bg-slate-900 text-white p-4 rounded-lg">
                  <h3 className="font-bold mb-1">
                    {activeTooltip === 'invoice' ? tooltips.invoice.title : tooltips.payment.title}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {activeTooltip === 'invoice' ? tooltips.invoice.description : tooltips.payment.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Integration Points */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Key Integration Points</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Customer Sync</h4>
              <p className="text-sm text-slate-600">Automatic customer creation and updates between platforms</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Invoice Push</h4>
              <p className="text-sm text-slate-600">Usage-based invoices sent from Metronome to Stripe</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-5 border border-emerald-200">
              <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Payment Status</h4>
              <p className="text-sm text-slate-600">Real-time payment confirmation and reconciliation</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-5 border border-amber-200">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Webhook Events</h4>
              <p className="text-sm text-slate-600">Event-driven updates for failures and status changes</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Metronome Configuration</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Connect Stripe account in Metronome settings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Enable automatic invoice sync to Stripe</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Configure customer mapping and ID synchronization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Set up webhook endpoints for payment events</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Define invoice finalization and delivery rules</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-800 to-purple-900 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Stripe Configuration</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Generate API keys for Metronome integration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Configure invoice collection settings and payment terms</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Set up customer portal for self-service billing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Enable automatic payment retry logic</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Configure email templates and notifications</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-slate-100 rounded-xl p-6">
          <h4 className="font-bold text-slate-900 mb-4">Interactive Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-slate-700">Hover over cards for detailed descriptions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-slate-700">Integration points highlighted in purple</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-slate-600" />
              <span className="text-slate-700">Arrows indicate data flow direction</span>
            </div>
          </div>
        </div>
          </>
        )}

        {activeTab === 'workflow' && (
          <WorkflowSequence />
        )}

        {activeTab === 'dataflow' && (
          <DataFlowDiagram />
        )}

        {activeTab === 'usecases' && (
          <UseCasesSection />
        )}

        {activeTab === 'implementation' && (
          <ImplementationGuide />
        )}
      </div>
    </div>
  );
}