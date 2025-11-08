import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail, Cookie, Eye, Ban, Download } from "lucide-react";

const PrivacyPage = () => {
  const lastUpdated = "November 08, 2025";

  const dataRights = [
    {
      icon: Eye,
      title: "The Right to Access",
      description:
        "You have the right to ask us for a copy of your personal data.",
    },
    {
      icon: Download,
      title: "The Right to Data Portability",
      description:
        "You have the right to request that we transfer your data to another organization, or directly to you.",
    },
    {
      icon: Ban,
      title: "The Right to Erasure",
      description:
        "You have the right to request that we erase your personal data, under certain conditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              How we protect and use your information at Nikapolis
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                This privacy notice explains how we, Nikapolis, use the personal
                data we collect from you when you use our website and services.
              </p>
            </div>

            {/* Who We Are */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nikapolis is an outdoor escape game experience that transforms
                  Istanbul into a living, breathing adventure. We create
                  interactive city tours that blend escape room puzzles with
                  urban exploration.
                </p>
              </CardContent>
            </Card>

            {/* Data Protection Philosophy */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  Our Data Protection Philosophy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We care about your privacy and confidentiality. We do not sell
                  or lease your data to third parties. We won&apos;t provide
                  your personal information to any third-party individual or
                  organization at any time unless compelled by law.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in transparency and giving you control over your
                  personal information.
                </p>
              </CardContent>
            </Card>

            {/* What Data We Collect */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  What Data Do We Collect?
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Personal Identification Information
                    </h3>
                    <p className="text-gray-600">
                      Such as name, email address, phone number, etc. – only if
                      you directly provide it to us when contacting us or
                      playing our games.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Non-Personal Information
                    </h3>
                    <p className="text-gray-600">
                      Such as your IP address, type of browser that you&apos;re
                      using, and data about your activity on our website to help
                      us improve your experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Game Progress Data
                    </h3>
                    <p className="text-gray-600">
                      When you play our games, we may store your progress,
                      puzzle solutions, and game statistics to enhance your
                      experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Collect Data */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  How Do We Collect Your Data?
                </h2>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>When you voluntarily complete our contact forms</li>
                  <li>When you provide feedback via email or message boards</li>
                  <li>
                    When you use or view our website via your browser&apos;s
                    cookies
                  </li>
                  <li>When you play our games and save your progress</li>
                  <li>When you subscribe to our newsletter or updates</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Data */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  How Will We Use Your Data?
                </h2>
                <p className="text-gray-600 mb-4">
                  We collect your data so that we can:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Provide you with our outdoor escape game services</li>
                  <li>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li>
                    Understand what content is interesting to you and improve
                    our games
                  </li>
                  <li>Send you important updates about your game progress</li>
                  <li>Improve the usability and experience of our website</li>
                  <li>
                    Send you information about new games or features (only with
                    your consent)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Marketing */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  Marketing
                </h2>
                <p className="text-gray-600 mb-4">
                  We would like to send you information about new games,
                  features, and special offers that we think you might like. If
                  you have agreed to receive marketing, you may always opt out
                  at a later date.
                </p>
                <p className="text-gray-600">
                  You have the right at any time to stop us from contacting you
                  for marketing purposes. If you no longer wish to be contacted,
                  please email us at{" "}
                  <span className="font-medium">nikapolistoday@gmail.com</span>{" "}
                  or unsubscribe directly from our emails.
                </p>
              </CardContent>
            </Card>

            {/* Your Data Protection Rights */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
                  Your Data Protection Rights
                </h2>
                <p className="text-gray-600 mb-6">
                  We want to ensure you are fully aware of all your data
                  protection rights:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {dataRights.map((right, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <right.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {right.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {right.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-gray-600">
                  <p>
                    <strong>The Right to Rectification</strong> – You have the
                    right to request that we correct any information you believe
                    is inaccurate or incomplete.
                  </p>
                  <p>
                    <strong>The Right to Restrict Processing</strong> – You have
                    the right to request that we restrict the processing of your
                    personal data, under certain conditions.
                  </p>
                  <p>
                    <strong>The Right to Object to Processing</strong> – You
                    have the right to object to our processing of your personal
                    data, under certain conditions.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <p className="text-primary-700">
                    If you make a request, we have one month to respond to you.
                    If you would like to exercise any of these rights, please
                    contact us at{" "}
                    <span className="font-medium">
                      nikapolistoday@gmail.com
                    </span>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Cookie className="h-8 w-8 text-primary-600 mr-3" />
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900">
                    Cookies
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Cookies are text files placed on your computer to collect
                    standard Internet log information and visitor behavior
                    information. When you visit our website, we may collect
                    information from you automatically through cookies or
                    similar technology.
                  </p>

                  <p className="text-gray-600">
                    For further information, visit{" "}
                    <a
                      href="https://allaboutcookies.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-secondary-700 underline"
                    >
                      allaboutcookies.org
                    </a>
                    .
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How We Use Cookies
                    </h3>
                    <ul className="text-gray-600 space-y-1 list-disc list-inside">
                      <li>Keeping you signed in during your game session</li>
                      <li>
                        Understanding how you use our website to improve user
                        experience
                      </li>
                      <li>Remembering your preferences and game settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Managing Cookies
                    </h3>
                    <p className="text-gray-600">
                      You can set your browser not to accept cookies, and the
                      website above tells you how to remove cookies from your
                      browser. However, some of our website features may not
                      function properly as a result.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Websites & Changes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Other Websites
                  </h3>
                  <p className="text-gray-600">
                    Our website contains links to other websites. This privacy
                    policy applies only to our website, so if you click on a
                    link to another website, you should read their privacy
                    policy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Policy Changes
                  </h3>
                  <p className="text-gray-600">
                    We keep our privacy policy under regular review and place
                    any updates on this web page. This privacy policy was last
                    updated on {lastUpdated}.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact */}
            <Card className="border border-secondary-200 bg-secondary-50 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Questions About Our Privacy Policy?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  If you have any questions about our privacy policy, the data
                  we hold on you, or you would like to exercise one of your data
                  protection rights, please don&apos;t hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:nikapolistoday@gmail.com"
                    className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-normal transition-all duration-200 inline-flex items-center justify-center"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
