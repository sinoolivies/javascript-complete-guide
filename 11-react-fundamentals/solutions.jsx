// 11 - React Fundamentals: Complete Solutions

import React from 'react';

// Solution 2: UserGreeting
export function UserGreeting({ firstName = "Guest", lastName = "" }) {
  return (
    <div className="greeting-box p-4 bg-slate-50 border rounded-lg">
      <h2 className="text-base font-semibold text-slate-800">
        Welcome back, {firstName} {lastName}!
      </h2>
    </div>
  );
}

// Solution 3: CurrencyDisplay
export function CurrencyDisplay({ amount, currencyCode = "USD" }) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);

  return <span className="font-mono font-bold text-blue-600">{formatted}</span>;
}

// Solution 12: InvoiceTable
export function InvoiceTable({ items = [], taxRate = 0.10 }) {
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="border rounded-xl p-4 bg-white shadow-xs">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b text-slate-400">
            <th className="pb-2">Description</th>
            <th className="pb-2 text-right">Qty</th>
            <th className="pb-2 text-right">Unit Price</th>
            <th className="pb-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((item) => (
            <tr key={item.id} className="py-2">
              <td className="py-2 text-slate-800">{item.description}</td>
              <td className="py-2 text-right">{item.quantity}</td>
              <td className="py-2 text-right">${item.unitPrice.toFixed(2)}</td>
              <td className="py-2 text-right font-medium">${(item.unitPrice * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 pt-3 border-t text-xs space-y-1">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-sm text-slate-900 pt-1 border-t">
          <span>Total:</span>
          <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

// Practical Challenge 1: Developer Portfolio Card
export function PortfolioCard({
  name,
  title,
  bio,
  avatarUrl,
  skills = [],
  socialLinks = [],
  isAvailableForHire = false,
}) {
  return (
    <div className="max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-md">
      <div className="flex items-center gap-4">
        <img src={avatarUrl} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500" />
        <div>
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <p className="text-xs text-slate-500">{title}</p>
          {isAvailableForHire && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
              🟢 Available for Hire
            </span>
          )}
        </div>
      </div>

      <p className="text-xs text-slate-600 my-4 leading-relaxed">{bio}</p>

      <div className="mb-4">
        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-2">Technical Skills</span>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {socialLinks.length > 0 && (
        <div className="pt-3 border-t flex gap-3 text-xs text-blue-600 font-medium">
          {socialLinks.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {link.platform}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
