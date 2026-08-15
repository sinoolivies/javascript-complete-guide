// 11 - React Fundamentals: Solutions for Exercises & Practical Challenges

import React from 'react';

// Solution 1: Greeting
export function Greeting({ name = "Guest" }) {
  return (
    <section className="greeting-section">
      <h1>Hello, {name}!</h1>
    </section>
  );
}

// Solution 3: PriceTag
export function PriceTag({ amount, currency = "USD" }) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);

  return <span className="price-tag font-bold">{formatted}</span>;
}

// Solution 5: SkillPill
export function SkillPill({ skill, level = "beginner" }) {
  const levelColors = {
    beginner: "bg-blue-100 text-blue-800",
    intermediate: "bg-emerald-100 text-emerald-800",
    expert: "bg-purple-100 text-purple-800",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${levelColors[level] || levelColors.beginner}`}>
      {skill} • {level}
    </span>
  );
}

// Solution 12: CartList
export function CartList({ items = [] }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <div className="cart-empty text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-2 flex justify-between">
            <span>{item.quantity}x {item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total pt-3 font-bold flex justify-between border-t border-gray-300">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

// Practical Challenge 1: Portfolio Profile Card
export function PortfolioCard({
  name,
  title,
  avatarUrl,
  bio,
  skills = [],
  socialLinks = [],
  isAvailableForHire = false,
}) {
  return (
    <div className="profile-card max-w-sm rounded-xl border border-gray-200 p-6 shadow-md bg-white">
      <div className="flex items-center gap-4">
        <img src={avatarUrl} alt={name} className="w-16 h-16 rounded-full object-cover border" />
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
          {isAvailableForHire && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
              🟢 Available for Hire
            </span>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-600 my-4">{bio}</p>

      <div className="skills-section mb-4">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Skills</h4>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span key={skill} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {socialLinks.length > 0 && (
        <div className="socials-section pt-3 border-t border-gray-100 flex gap-3 text-xs text-blue-600">
          {socialLinks.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
