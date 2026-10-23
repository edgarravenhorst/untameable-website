import { redirect } from 'next/navigation';
import { localePath } from '@/helper/locale-path';

type ProcessPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProcessPage(props: ProcessPageProps) {
  const { locale } = await props.params;
  redirect(localePath(locale, '/#approach'));
}
