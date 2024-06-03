import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <section
        id="how-to"
        className="relative flex items-center justify-center pt-36"
      >
        <div className="h-full w-full max-w-6xl">
          <div className="mx-10 flex flex-col gap-10">
            <div>
              <div className="flex flex-col gap-6">
                <h1 className="text-center text-[35px] font-medium md:text-[42px]">
                  Privacy Policy
                </h1>
                <br />
                <div className="statements flex flex-col gap-8">
                  <p className="text-[16px] text-foreground">
                    Last Updated: 12th May, 2024
                  </p>
                  <p className="text-[16px] text-foreground">
                    Coding Madlad (&quot;we&quot; or &quot;us&quot;) operates
                    the website located at www.madlad.store (the
                    &quot;Website&quot;) and provides Notion templates and other
                    services (collectively, the &quot;Service&quot;). This
                    Privacy Policy (&quot;Policy&quot;) describes how we
                    collect, use, and disclose information about you when you
                    access or use the Service.
                  </p>
                  <ul>
                    <li>
                      <p>Information We Collect</p>
                      <ul>
                        <li>
                          Personal Information: When you access or use the
                          Service, we may collect personal information that you
                          provide to us, such as your name and email address.
                        </li>
                        <li>
                          Usage Information: We may also collect information
                          about your use of the Service, including your
                          interactions with the Website, the templates you
                          access or download, and other usage data.
                        </li>
                        <li>
                          Cookies: We may use cookies and similar tracking
                          technologies to collect information about your
                          interactions with the Service. Cookies are small text
                          files that are stored on your device when you visit a
                          website.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>How We Use Your Information</p>
                      <ul>
                        <li>
                          <p>We may use the information we collect to:</p>
                          <ul>
                            <li>Provide, maintain, and improve the Service.</li>
                            <li>
                              Communicate with you about the Service, including
                              responding to your inquiries and providing
                              customer support.
                            </li>
                            <li>Analyze usage trends and preferences.</li>
                            <li>
                              Prevent, detect, and investigate fraud and other
                              illegal activities.
                            </li>
                            <li>
                              Comply with applicable laws and regulations.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>How We Share Your Information</p>
                      <ul>
                        <li>
                          <p>
                            We may share your information with third parties in
                            the following circumstances:
                          </p>
                          <ul>
                            <li>
                              With service providers: We may share your
                              information with third-party service providers who
                              help us operate the Service, such as hosting
                              providers, payment processors, and analytics
                              providers.
                            </li>
                            <li>
                              With affiliates: We may share your information
                              with our affiliates for the purposes described in
                              this Policy.
                            </li>
                            <li>
                              With business partners: We may share your
                              information with business partners who offer
                              products or services that may be of interest to
                              you.
                            </li>
                            <li>
                              For legal purposes: We may disclose your
                              information to comply with applicable laws and
                              regulations, to respond to a subpoena, court
                              order, or other legal process, or to protect our
                              rights or the rights of others.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>Your Choices</p>
                      <ul>
                        <li>
                          You may opt out of receiving promotional emails from
                          us by following the instructions provided in those
                          emails. Please note that even if you opt out of
                          receiving promotional emails, we may still send you
                          non-promotional communications, such as those related
                          to your account or transactions.
                        </li>
                        <li>
                          You can also control cookies through your browser
                          settings. Please note that disabling cookies may
                          affect your ability to access or use certain features
                          of the Service.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <p>Security</p>
                      <p>
                        We take reasonable measures to protect the information
                        we collect from loss, misuse, and unauthorized access,
                        disclosure, alteration, and destruction.
                      </p>
                    </li>
                    <li>
                      <p>Children&apos;s Privacy</p>
                      <p>
                        The Service is not directed to children under the age of
                        13, and we do not knowingly collect personal information
                        from children under the age of 13. If you are under the
                        age of 13, please do not provide us with any personal
                        information.
                      </p>
                    </li>
                    <li>
                      <p>International Transfers</p>
                      <p>
                        Your information may be transferred to and processed in
                        countries other than your own. These countries may have
                        data protection laws that are different from those in
                        your country.
                      </p>
                    </li>
                    <li>
                      <p>Changes to this Policy</p>
                      <p>
                        We may update this Policy from time to time. If we make
                        any material changes to this Policy, we will notify you
                        by email or by posting a notice on the Website. Your
                        continued use of the Service after the effective date of
                        any such changes constitutes your acceptance of the
                        revised Policy.
                      </p>
                    </li>
                    <li>
                      <p>Contact Us</p>
                      <p>
                        If you have any questions about these Terms, please
                        contact us at{" "}
                        <span>
                          <Link
                            href="mailto:contact@madlad.store"
                            className="hover:underline"
                          >
                            contact@madlad.store
                          </Link>
                        </span>
                      </p>
                      <p>
                        By accessing or using the Service, you acknowledge that
                        you have read, understood, and agree to be bound by
                        these Terms.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
