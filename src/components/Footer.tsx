interface FooterProps {
  firstName?: string;
  lastName?: string;
}

export default function Footer({ firstName, lastName }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const displayName =
    firstName && lastName
      ? `${firstName} ${lastName}`
      : "Russell Loreto";

  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} {displayName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

