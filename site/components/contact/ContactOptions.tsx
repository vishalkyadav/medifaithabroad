import Image from "next/image";
import { contact, hasPublicAddress } from "@/lib/contact";

const cardClass =
  "flex flex-col rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md";

export function ContactOptions() {
  const showOffice = hasPublicAddress() && contact.address;

  return (
    <div
      className={`grid gap-6 ${showOffice ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      <a
        href={contact.callCtaHref}
        className={`${cardClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal`}
      >
        <Image
          src="/images/icons/phone.svg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10"
          aria-hidden
        />
        <h3 className="mt-4 text-lg font-semibold text-brand-teal-dark">
          Make a call
        </h3>
        <p className="mt-2 text-sm text-brand-text-muted">
          Speak with our team during business hours.
        </p>
        <p className="mt-4 font-semibold text-brand-teal">{contact.phoneDisplay}</p>
      </a>

      <a
        href={`mailto:${contact.email}`}
        className={`${cardClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal`}
      >
        <Image
          src="/images/icons/email.svg"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10"
          aria-hidden
        />
        <h3 className="mt-4 text-lg font-semibold text-brand-teal-dark">
          Send email
        </h3>
        <p className="mt-2 text-sm text-brand-text-muted">
          Write to us with your questions or documents list.
        </p>
        <p className="mt-4 break-all font-semibold text-brand-teal">
          {contact.email}
        </p>
      </a>

      {showOffice ? (
        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-brand-teal-dark">
            Visit an office
          </h3>
          <p className="mt-2 text-sm text-brand-text-muted">{contact.address}</p>
        </div>
      ) : (
        <div className={cardClass}>
          <h3 className="text-lg font-semibold text-brand-teal-dark">
            Counselling by appointment
          </h3>
          <p className="mt-2 text-sm text-brand-text-muted">
            We provide remote counselling by phone, email, and video. Submit the
            form below or call us to schedule a session.
          </p>
          <p className="mt-4 text-sm text-brand-text-muted">
            Instagram: {contact.instagramHandle}
          </p>
        </div>
      )}
    </div>
  );
}
