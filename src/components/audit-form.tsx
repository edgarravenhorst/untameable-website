'use client';

import { useActionState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  type AuditRequestState,
  submitAuditRequest,
} from '@/actions/submit-audit-request';

const initialState: AuditRequestState = { status: 'idle' };

const fieldClass =
  'bg-white/5 border border-white/20 px-3 py-2 font-semibold text-white text-base outline-none focus:border-primary';

export function AuditForm() {
  const { t } = useTranslation('process');
  const [state, formAction, pending] = useActionState(
    submitAuditRequest,
    initialState,
  );

  if (state.status === 'success') {
    return (
      <p className="font-semibold text-xl m-0" role="status">
        {t('freeAudit.success')}
      </p>
    );
  }

  const errorText =
    state.error === 'validation'
      ? t('freeAudit.errorValidation')
      : state.error === 'delivery'
        ? t('freeAudit.errorDelivery')
        : null;

  return (
    <form action={formAction} className="relative flex flex-col gap-5">
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <label
        className="flex flex-col gap-2 font-bold text-white text-base"
        htmlFor="audit-name"
      >
        {t('freeAudit.name')}
        <input
          id="audit-name"
          name="name"
          type="text"
          required
          maxLength={200}
          autoComplete="name"
          className={fieldClass}
        />
      </label>

      <label
        className="flex flex-col gap-2 font-bold text-white text-base"
        htmlFor="audit-company"
      >
        {t('freeAudit.company')}
        <input
          id="audit-company"
          name="company"
          type="text"
          required
          maxLength={200}
          autoComplete="organization"
          className={fieldClass}
        />
      </label>

      <label
        className="flex flex-col gap-2 font-bold text-white text-base"
        htmlFor="audit-email"
      >
        {t('freeAudit.email')}
        <input
          id="audit-email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          className={fieldClass}
        />
      </label>

      <label
        className="flex flex-col gap-2 font-bold text-white text-base"
        htmlFor="audit-message"
      >
        {t('freeAudit.message')}
        <textarea
          id="audit-message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          className={fieldClass}
        />
      </label>

      {errorText ? (
        <p className="text-primary font-semibold m-0" role="alert">
          {errorText}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-arrow bg-primary text-(--background) font-bold py-2 cursor-pointer self-start disabled:opacity-60"
      >
        <span>{pending ? t('freeAudit.sending') : t('freeAudit.submit')}</span>
      </button>
    </form>
  );
}
