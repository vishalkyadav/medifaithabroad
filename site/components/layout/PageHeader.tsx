import { Container } from "./Container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-brand-border bg-brand-muted">
      <Container className="py-12 sm:py-14">
        <h1 className="type-display-1 text-brand-teal-dark">{title}</h1>
        {description && (
          <p className="type-body-lg mt-4 max-w-2xl text-brand-text-muted">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
