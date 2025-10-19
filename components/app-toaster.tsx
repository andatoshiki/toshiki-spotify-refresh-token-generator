// Add Sonner's Toaster to the app root for toast notifications
'use client';
import { Toaster } from 'sonner';

export function AppToaster() {
  return <Toaster richColors position="top-center" theme="system" />;
}
