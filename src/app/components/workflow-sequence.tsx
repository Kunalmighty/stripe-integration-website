import { ArrowDown, CheckCircle2 } from 'lucide-react';

interface StepProps {
  number: number;
  system: 'metronome' | 'integration' | 'stripe';
  title: string;
  description: string;
  details: string[];
  isLast?: boolean;
}

function Step({ number, system, title, description, details, isLast }: StepProps) {
  const systemColors = {
    metronome: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      text: 'text-blue-700',
      badge: 'bg-blue-600'
    },
    integration: {
      bg: 'bg-purple-50',
      border: 'border-purple-300',
      text: 'text-purple-700',
      badge: 'bg-purple-600'
    },
    stripe: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-300',
      text: 'text-indigo-700',
      badge: 'bg-indigo-600'
    }
  };

  const colors = systemColors[system];

  return (
    <div className="relative">
      <div className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}>
        <div className="flex items-start gap-4">
          <div className={`${colors.badge} text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg`}>
            {number}
          </div>
          <div className="flex-1">
            <h4 className={`font-bold text-lg mb-2 ${colors.text}`}>{title}</h4>
            <p className="text-slate-700 mb-3">{description}</p>
            <ul className="space-y-2">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {!isLast && (
        <div className="flex justify-center my-4">
          <ArrowDown className="w-8 h-8 text-slate-400" />
        </div>
      )}
    </div>
  );
}

export function WorkflowSequence() {
  const steps: StepProps[] = [
    {
      number: 1,
      system: 'metronome',
      title: 'Set Customer Billing Configuration',
      description: 'Configure customer with Stripe billing settings in Metronome',
      details: [
        'Set billing_configuration with Stripe customer ID',
        'Choose collection method: charge_automatically or send_invoice',
        'Configure via Metronome app or API (/customers endpoint)',
        'For multi-entity billing, use delivery_method_id to specify Stripe account'
      ]
    },
    {
      number: 2,
      system: 'metronome',
      title: 'Usage Events Ingested',
      description: 'Metronome tracks customer usage throughout the billing period',
      details: [
        'Real-time usage events sent via Metronome API',
        'Events aggregated by billing dimensions',
        'Pricing rules and billing logic applied',
        'Credits and commitments accounted for'
      ]
    },
    {
      number: 3,
      system: 'metronome',
      title: 'Invoice Finalized in Metronome',
      description: 'At end of billing period, Metronome finalizes the invoice',
      details: [
        'Usage data aggregated for the billing period',
        'Line items calculated with pricing logic',
        'Taxes computed (if using Anrok, Avalara, or Stripe Tax)',
        'Invoice marked as finalized and ready for Stripe'
      ]
    },
    {
      number: 4,
      system: 'integration',
      title: 'Automatic Invoice Creation in Stripe',
      description: 'Metronome automatically creates corresponding invoice in Stripe',
      details: [
        'Invoice data transmitted to Stripe via API',
        'Line items created as Stripe invoice items',
        'Custom field mappings applied (if configured)',
        'Stripe invoice ID returned to Metronome'
      ]
    },
    {
      number: 5,
      system: 'stripe',
      title: 'Stripe Invoice Finalized',
      description: 'Invoice finalized in Stripe based on configuration',
      details: [
        'If auto_advance=true: invoice finalized immediately',
        'If "leave as drafts" enabled: remains draft for manual review',
        'Due dates set based on global configuration',
        'Customer notified via email (for send_invoice method)'
      ]
    },
    {
      number: 6,
      system: 'stripe',
      title: 'Payment Collection',
      description: 'Stripe attempts to collect payment from customer',
      details: [
        'charge_automatically: payment method charged immediately',
        'send_invoice: email sent with payment instructions',
        'Smart Retries enabled for failed payments',
        'Payment status tracked in Stripe'
      ]
    },
    {
      number: 7,
      system: 'integration',
      title: 'Webhook Event Sent to Metronome',
      description: 'Stripe sends webhook events to update invoice status',
      details: [
        'Events: invoice.paid, invoice.payment_failed, etc.',
        'Metronome receives webhook at configured endpoint',
        'Invoice status updated in Metronome',
        'Statuses: FINALIZED, PAID, PAYMENT_FAILED, UNCOLLECTIBLE, VOID'
      ]
    },
    {
      number: 8,
      system: 'metronome',
      title: 'Invoice Status Synchronized',
      description: 'Final invoice status reflected in Metronome',
      details: [
        'external_status field updated via webhook',
        'Status accessible via /listInvoices API endpoint',
        'Data available in Metronome data export',
        'Revenue recognition triggered for paid invoices',
      ],
      isLast: true
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Complete Workflow Sequence</h3>
        <p className="text-slate-600">End-to-end process from billing configuration to payment reconciliation</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {steps.map((step) => (
          <Step key={step.number} {...step} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded"></div>
          <span className="text-slate-600">Metronome Actions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-600 rounded"></div>
          <span className="text-slate-600">Integration Layer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-indigo-600 rounded"></div>
          <span className="text-slate-600">Stripe Actions</span>
        </div>
      </div>
    </div>
  );
}
