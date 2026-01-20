import { redirect } from "next/navigation";

export default function RedirectCoursePage({
  params,
}: {
  params: { slug: string };
}) {
  redirect(`/Solutions/courses/${params.slug}`);
}
