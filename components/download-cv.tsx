"use client";

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './cv-document';
import { FileDown } from 'lucide-react';

export default function DownloadCV() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button className="px-6 py-3 bg-secondary/50 text-secondary-foreground rounded-lg font-semibold opacity-50 cursor-not-allowed flex items-center gap-2">
        <FileDown size={20} />
        Loading CV...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<CVDocument />}
      fileName="Sjaaf_Rhisjad_CV.pdf"
      className="inline-block"
    >
      {({ blob, url, loading, error }) => (
        <button
          disabled={loading}
          className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform relative overflow-hidden group ${
            loading
              ? 'bg-secondary/50 text-secondary-foreground opacity-50 cursor-not-allowed'
              : 'bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] text-primary-foreground hover:bg-right hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] hover:scale-105'
          }`}
        >
          {/* Shine effect overlay */}
          {!loading && (
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          )}
          <FileDown size={20} className="relative z-10" />
          <span className="relative z-10">{loading ? 'Generating PDF...' : 'Download Resume'}</span>
        </button>
      )}
    </PDFDownloadLink>
  );
}
