import { FunctionComponent, useEffect } from "react";

interface TermsPageProps {}

const TermsPage: FunctionComponent<TermsPageProps> = () => {
  useEffect(() => {
    document.title = "Rumble Worlds - Terms & Conditions ";
  }, []);

  return (
    <div
      className="container text-white"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
    >
      <h1 className="lilita-font heading-4 shadow-1 text-uppercase">
        Terms of Service
      </h1>
      <p className="body-2 pb-5">Last updated on January 10, 2022</p>
      <h3 className="lilita-font heading-5 shadow-3">I. AGREEMENT TO TERMS</h3>
      <p className="body-2 pb-5">
        These Terms of Service and User Agreement constitute a legally binding
        agreement made between you, whether personally or on behalf of an entity
        (“you”) and Motion Miracles Pte. Ltd. (through Rumble Worlds at
        www.rumbleworlds.io) (the "Company", “we”, “us”, or “our”), concerning
        your access to and use of the www.rumbleworlds.io website, including any
        other digital form or channel, mobile website or mobile application
        related, linked, or otherwise connected thereto (collectively, the
        “Site”).
        <br /> <br />
        You hereby agree that by browsing or accessing the Site, you have read,
        understood, and agreed to be bound by all of these Terms of Service and
        User Agreement in entirety.
        <br /> <br />
        IF YOU DO NOT AGREE WITH ALL OR ANY PART OF THESE TERMS OF SERVICE AND
        USER AGREEMENT, THEN YOU ARE EXPRESSLY PROHIBITED FROM ACCESSING AND/OR
        USING THE SITE AND YOU MUST DISCONTINUE THE ACCESS AND/OR USE
        IMMEDIATELY.
        <br /> <br />
        Supplemental terms and conditions or documents that may be posted on the
        Site from time to time are hereby expressly incorporated herein by
        reference. We reserve the right, in our sole and absolute discretion, to
        make changes or modifications to these Terms of Service and User
        Agreement at any time and for any reason. We will alert you about any
        such changes or modifications by updating the “Last updated” date
        incorporated at the top of these Terms of Service and User Agreement,
        and you waive any right to receive specific notice of each such changes
        or modifications. Please ensure that you check the applicable Terms of
        Service and User Agreement every time you use our Site so that you
        understand which Terms apply, and the last date of changes and/or
        modifications to these Terms of Service and User Agreement. You will be
        subject to, and will be deemed to have been made aware of and to have
        accepted, the changes in any changed, modified, or otherwise revised
        Terms of Service and User Agreement by your continued access and/or use
        of the Site after the date such changed, modified or otherwise revised
        Terms of Service and User Agreement are posted.
      </p>

      <h3 className="lilita-font heading-5 shadow-3">
        II. INTELLECTUAL PROPERTY RIGHTS
      </h3>
      <p className="body-2 pb-5">
        Unless otherwise indicated, the Site is our proprietary property and all
        source code, databases, functionality, software, website designs, icons,
        user interface, characters, audio, video, text, photographs, and
        graphics on the Site (collectively, the “Content”) and the trademarks,
        service marks, sound marks and logos contained therein (the “Marks”) are
        owned or controlled by us or licensed to us, and are protected by
        copyright and trademark laws and various other intellectual property
        rights and unfair competition laws of the Singapore, and other
        applicable international copyright laws, and international conventions.
        The Content and the Marks are provided on the Site “AS IS” for your
        information and personal use only. Except as expressly provided in these
        Terms of Service and User Agreement, no part of the Site and no Content
        or Marks may be copied, reproduced, aggregated, republished, uploaded,
        posted, publicly displayed, encoded, translated, transmitted,
        distributed, sold, licensed, or otherwise exploited for any commercial,
        marketing or promotional purpose whatsoever, without our express prior
        written permission.
        <br /> <br />
        Provided that you are eligible to use the Site, you are granted a
        limited and conditional license to access and use the Site and to
        download or print a copy of any portion of the Content to which you have
        properly gained access solely for your personal, and non-commercial use.
        We reserve all rights not expressly granted to you in and to the Site,
        the Content and the Marks, and also reserve the right to revoke the
        limited and conditional license granted to you at any time for any
        reason without notice or intimation.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        III. USER REPRESENTATIONS
      </h3>
      <p className="body-2 pb-5">
        By using the Site, you represent and warrant that:
        <br />
        <ol>
          <li>
            you have the legal capacity and you agree to comply with these Terms
            of Service and User Agreement in entirety;
          </li>
          <li>
            you are not a minor in the jurisdiction in which you reside, or
            under the laws applicable to you; ​
          </li>
          <li>
            you will not access the Site through automated or non-human means,
            whether through a bot, script or otherwise;
          </li>
          <li>
            you will not use the Site for any illegal or unauthorized purpose;
          </li>
          <li>
            you will not cause or plan/attempt to cause, whether directly or
            indirectly, any cyber security harm, threats or attacks on the Site;
          </li>
          <li>
            you will not cause or plan/attempt to cause, whether directly or
            indirectly, any cyber security or physical harm, threats or attacks
            on other Users of the Site, and
          </li>
          <li>
            your use of the Site will not violate any applicable laws, rules or
            regulations.
          </li>
        </ol>
        <br />
        If you provide any information that is untrue, false, inaccurate, not
        current, or incomplete, we have the right to suspend or terminate your
        account and refuse any and all current or future use of the Site (or any
        portion thereof) without providing any reason and without notice or
        intimation.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        IV. PURCHASES AND PAYMENT
      </h3>
      <p className="body-2 pb-5">
        The accepted forms of payment are displayed at the Marketplace Offering
        portion of the Site. You agree to provide current, complete, and
        accurate purchase and account information for all purchases made via the
        Site. You further agree to promptly update account and payment
        information, including email address, payment method, and payment card
        expiration date, so that we can complete your transactions and contact
        you as needed. Sales or other applicable taxes will be added to the
        price of purchases as deemed required by Us, or applicable under the
        relevant laws, rules, or regulations. We may change prices at any time
        at out sole discretion without providing any reason and without notice
        or intimation. All payments shall be in the currency displayed on the
        Site.
        <br /> <br />
        You agree to pay all charges at the prices then in effect for your
        purchases and any applicable service or process fees and taxes, and you
        authorize us to charge your chosen payment provider for any such amounts
        upon placing your order. We reserve the right to correct any errors or
        mistakes in pricing, even if we have already requested or received
        payment.
        <br /> <br />
        We reserve the absolute and discretionary right to refuse any order
        placed through the Site at any time without providing any reason and
        without notice or intimation. We may, in our sole and absolute
        discretion, limit or cancel quantities purchased per person, per
        household, or per order, or any combination thereof. These restrictions
        may include orders placed by or under the same customer account, the
        same payment method, and/or orders that use the same billing or other
        address.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        V. PROHIBITED ACTIVITIES
      </h3>
      <p className="body-2 pb-5">
        You shall not browse, access or use the Site for any purpose other than
        that for which we make the Site available. The Site shall not be used in
        connection with any commercial, marketing or promotional endeavors
        except those that are specifically endorsed or approved by us.
        <br />
        <br />
        As a User (including potential User) of the Site, you agree not to:
        <ul>
          <li>
            Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, archive, or directory without written
            permission from us.
          </li>
          <li>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords or payment information.
          </li>
          <li>
            Circumvent, disable, bypass or otherwise interfere with
            security-related features of the Site, including features that
            prevent or restrict the use or copying of any Content or enforce
            limitations on the use of the Site and/or the Content contained
            therein.
          </li>
          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Site.
          </li>
          <li>
            Use any information obtained from the Site in order to harass,
            abuse, scam, stalk, bully or harm any person.
          </li>
          <li>
            Make improper or unwarranted use of our support services or submit
            false reports of abuse, violations or misconduct.
          </li>
          <li>
            Use the Site in a manner inconsistent with any applicable laws,
            rules or regulations.
          </li>
          <li>Engage in unauthorized framing of or linking to the Site.</li>
          <li>
            Upload or transmit (or plan or attempt to upload or to transmit), or
            cause to be uploaded or transmitted any viruses, malwares, Trojan
            horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Site or modifies, impairs, disrupts, alters, or interferes with the
            use, features, functions, operation, security, data protection, or
            maintenance of the Site.
          </li>
          <li>
            Engage in any automated use of the system, such as using scripts or
            bots to send comments or messages, or using any data mining, robots,
            or similar data gathering and extraction tools.
          </li>
          <li>
            Delete the copyright or other proprietary and intellectual rights
            notice from any Content or any portion of the Site.
          </li>
          <li>
            Attempt to impersonate another user or person or use the username of
            another user.
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit), or cause
            to be uploaded or transmitted any material that acts as a passive or
            active information collection, storage, sorting or transmission
            mechanism, including without limitation, clear graphics interchange
            formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar
            devices (sometimes referred to as “spyware” or “passive collection
            mechanisms” or “pcms”).
          </li>
          <li>
            Interfere with, disrupt, or create an undue burden or stress on the
            Site or the networks or services connected to the Site.
          </li>
          <li>
            Harass, annoy, stalk, intimidate, abuse or threaten any of our
            employees, representatives or agents engaged in providing any
            portion of the Site to you.
          </li>
          <li>
            Attempt to bypass any security or non-security measures of the Site
            designed to prevent or restrict access to the Site, or any portion
            of the Site.
          </li>
          <li>
            Copy or adapt the Site’s software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </li>
          <li>
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Site.
          </li>
          <li>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Site, or using
            or launching, whether directly or indirectly, any unauthorized
            script or other software.
          </li>
          <li>
            Use a buying agent or purchasing agent to make purchases on the
            Site.
          </li>
          <li>
            Make any unauthorized use of the Site, including collecting
            usernames, passwords, sensitive information, payment information
            and/or email addresses of users by electronic or other means for the
            purpose of sending unsolicited email, or creating user accounts by
            automated means or under false pretenses.
          </li>
          <li>
            Use the Site as part of any effort to compete with us or otherwise
            use the Site and/or the Content for any revenue-generating,
            commercial, marketing or promotional endeavor.
          </li>
        </ul>
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        VI. USER GENERATED CONTRIBUTIONS
      </h3>
      <p className="body-2 pb-5">
        The Site does not offer users to submit or post content. We may provide
        you with the opportunity to create, submit, post, display, transmit,
        perform, publish, distribute, or broadcast content and materials to us
        or on the Site, including but not limited to creating characters,
        virtual world-alike objects, text, writings, video, audio, photographs,
        graphics, comments, suggestions, or personal information or other
        material (collectively, "Contributions"). Contributions may be viewable
        by other users of the Site and through third-party websites. As such,
        any Contributions you transmit may be treated in accordance with the
        Site Privacy Policy. When you create or make available any
        Contributions, you thereby represent and warrant that:
        <br />
        <br />
        <ul>
          <li>
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral and other intellectual rights of any third party.
          </li>
          <li>
            You are the creator and owner of or have the necessary licenses,
            rights, consents, authorizations, releases, and permissions to use
            and to authorize us, the Site, and other users of the Site to use
            your Contributions in any manner contemplated by the Site and these
            Terms of Service and User Agreement.
          </li>
          <li>
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any
            manner contemplated by the Site and these Terms of Service and User
            Agreement.
          </li>
          <li>
            Your Contributions are not false, inaccurate, infringing, illegal,
            unlawful, or misleading.
          </li>
          <li>
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </li>
          <li>
            Your Contributions are not obscene, lewd, sexual, lascivious,
            filthy, violent, harassing, libelous, slanderous, or otherwise
            objectionable (as determined by us).
          </li>
          <li>
            Your Contributions do not ridicule, mock, disparage, intimidate,
            defame, or abuse anyone.
          </li>
          <li>
            Your Contributions are not used to harass, intimidate, defame, or
            threaten (in the legal sense of those terms) any other person and to
            promote violence against a specific person or class of people.
          </li>
          <li>
            Your Contributions do not violate any applicable laws, regulations,
            or rules.
          </li>
          <li>
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </li>
          <li>
            Your Contributions do not violate any applicable laws concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors;
          </li>
          <li>
            Your Contributions do not include any offensive comments or objects
            that are connected to race, national origin, gender, sexual
            preference, religion, or physical/mental disabilities.
          </li>
          <li>
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Terms of Service and User
            Agreement, Privacy Policy of the Site or any applicable laws, rules
            or regulations.
          </li>
        </ul>
        Any use of the Site or the Marketplace Offerings in violation of the
        foregoing violates these Terms of Service and User Agreement and may
        result in, among other things, termination or suspension of your rights
        to use the Site and the Marketplace Offerings without any reason and
        without notice or intimation.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        VII. CONTRIBUTION LICENSE
      </h3>
      <p className="body-2 pb-5">
        You and Site agree that we may access, store, process, and use any
        information and personal data that you provide following the terms of
        the Privacy Policy and your choices (including settings).
        <br />
        <br />
        By submitting suggestions or other feedback regarding the Site, you
        agree that we can use and share such feedback for any purpose without
        acknowledgement, credit, compensation to you.
        <br />
        <br />
        We do not assert any ownership over your Contributions. You retain full
        ownership of all of your Contributions and any intellectual property
        rights or other proprietary rights associated with your Contributions.
        We are not liable for any statements or representations in your
        Contributions provided by you in any area on the Site. You are solely
        responsible for your Contributions to the Site and you expressly agree
        to exonerate us from any and all responsibility, liability, claim,
        action, or obligation, and to refrain from any legal action against us
        regarding your Contributions.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">VIII. SUBMISSIONS</h3>
      <p className="body-2 pb-5">
        You acknowledge and agree that any questions, comments, suggestions,
        opinions, ideas, reviews, feedback, or other information regarding the
        Site or the Marketplace Offerings ("Submissions") provided by you to us
        are non-confidential and shall become our sole property. We shall own
        exclusive rights, including all intellectual property rights, and shall
        be entitled to the unrestricted and unconditional use and dissemination
        of these Submissions for any lawful purpose, commercial or otherwise,
        without acknowledgment, credit or compensation to you. You hereby waive
        all moral and other authorship rights to any such Submissions, and you
        hereby warrant that any such Submissions are original with you or that
        you have the right to submit such Submissions. You hereby agree that
        there shall be no recourse, whether legal or otherwise (including,
        without limitation, social media posts) against us for any alleged or
        actual infringement or misappropriation of any proprietary right in your
        Submissions.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">IX. SITE MANAGEMENT</h3>
      <p className="body-2 pb-5">
        We reserve the right, but not the obligation, to:
        <ol type="1">
          <li>
            monitor the Site for violations of these Terms of Service and User
            Agreement;
          </li>
          <li>
            take appropriate legal action against anyone who, in our sole
            discretion, violates the law or these Terms of Service and User
            Agreement, including without limitation, reporting such user to
            concerned law enforcement authorities;
          </li>
          <li>
            in our sole discretion and without limitation, refuse, restrict
            access to, limit the availability of, or disable (to the extent
            technologically feasible) any of your Contributions or any portion
            thereof;
          </li>
          <li>
            in our sole discretion and without limitation, notice, or liability,
            to remove from the Site or otherwise disable all files and content
            that are excessive in size or are in any way burdensome to our
            systems, or possess any security threat in out sole determination
            and discretion; and
          </li>
          <li>
            otherwise manage the Site in a manner designed to protect our rights
            and property and to facilitate the proper functioning of the Site
            and the Marketplace Offerings.
          </li>
        </ol>
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        X. TERM AND TERMINATION
      </h3>
      <p className="body-2 pb-5">
        These Terms of Service and User Agreement shall remain in full force and
        effect while you browse, access, or use the Site.
        <br />
        <br />
        WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE AND USER
        AGREEMENT, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
        DETERMINATION, AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE
        OF THE SITE AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP
        ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
        WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
        COVENANT CONTAINED IN THESE TERMS OF SERVICE AND USER AGREEMENT OR OF
        ANY APPLICABLE LAWS, RULES OR REGULATIONS, OR OF ANY OTHER INTERNAL
        POLICY OF US. WE MAY TERMINATE YOUR ACCESS, USE OR PARTICIPATION IN THE
        SITE AND THE MARKETPLACE OFFERINGS OR DELETE ANY CONTENT, CONTRIBUTION
        OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, REASON,
        NOTICE OR INTIMATION, IN OUR SOLE AND ABSOLUTE DISCRETION AND
        DETERMINATION.
        <br />
        <br />
        If we terminate or suspend your account for any reason, you are
        prohibited from registering and creating a new account under your name,
        a fake, fictitious, character or borrowed name, or the name of any third
        party, even if you may be acting on behalf of the third party. In
        addition to terminating, blacklisting or suspending your account, we
        reserve the right to take appropriate legal action, including without
        limitation pursuing civil, criminal, and injunctive or equitable
        remedies.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        XI. MODIFICATIONS AND INTERRUPTIONS
      </h3>
      <p className="body-2 pb-5">
        We reserve the right to change, modify, alter, or remove the contents of
        the Site at any time or for any reason at our sole discretion and
        determination without notice or intimation. However, we have no
        obligation to update any information on our Site. We also reserve the
        right to modify or discontinue all or part of the Marketplace Offerings
        without notice or intimation at any time. We will not be liable to you
        or any third party for any modification, price change, suspension, or
        discontinuance of the Site or the Marketplace Offerings, and you shall
        not be entitled to claim or request any previous price or offers.
        <br />
        <br />
        We cannot guarantee the Site and the Marketplace Offerings will be
        available at all times. We may experience hardware, software, or other
        problems or need to perform maintenance related to the Site, resulting
        in interruptions, delays, disruptions, or errors. We reserve the right
        to change, revise, update, suspend, discontinue, or otherwise modify the
        Site or the Marketplace Offerings at any time or for any reason without
        notice or intimation to you. You agree that we have no liability
        whatsoever for any loss, damage, or inconvenience caused by your
        inability to browse, access or use the Site or the Marketplace Offerings
        during any downtime, maintenance or discontinuance of the Site or the
        Marketplace Offerings. Nothing in these Terms of Service and User
        Agreement will be construed to obligate us to maintain and support the
        Site or the Marketplace Offerings or to supply any corrections, updates,
        or releases in connection therewith.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">XII. GOVERNING LAW</h3>
      <p className="body-2 pb-5">
        These terms shall be exclusively governed by and defined following the
        laws of Singapore. You irrevocably consent that the courts of Singapore
        shall have exclusive jurisdiction to resolve any dispute which may arise
        in connection with these terms.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        XIII. DISPUTE RESOLUTION
      </h3>
      <p className="body-2 pb-5">
        To expedite resolution and control the cost of any dispute, controversy,
        or claim related to these Terms of Service and User Agreement (each
        <strong>"Dispute"</strong> and collectively, the
        <strong>“Disputes”</strong>) brought by either you or us (individually,
        a <strong>“Party”</strong> and collectively, the{" "}
        <strong>“Parties”</strong>),{" "}
        <u>
          the Parties agree to first attempt to negotiate any Dispute (except
          those Disputes expressly provided below) informally for at least
          twenty-five (25) days before initiating any action.
        </u>{" "}
        Such informal negotiations commence upon written notice from one Party
        to the other Party. The existence of these negotiations between the
        parties, and any communications, correspondences, offers, claims,
        assertions, pleadings, representations, settlement, and/or reasons for
        success or failure of such negotiations shall remain confidential at all
        times, and shall not be used or shared by either party at any forum, or
        platform, in any mode or medium. In case of litigation after
        unsuccessful or failed negotiations between the Parties, no information
        shall be presented, pleaded and admissible before the Court during
        litigation, except for the date and mode of commencement and conclusion
        of negotiations between the parties for the sole purpose of pleading
        compliance with the provision of these mandatory negotiations. <br />
        Any dispute arising out of or in connection with this contract,
        including any question regarding its existence, validity, or
        termination, shall be referred to and finally resolved by the Courts in
        Singapore.
        <br />
        <br />
        The Parties agree that any action shall be limited to the Dispute
        between the Parties individually. To the full extent permitted by law,
        (a) no action shall be joined with any other proceeding; (b) there is no
        right or authority for any Dispute to be litigated on a class-action
        basis or to utilize class action procedures; and (c) there is no right
        or authority for any Dispute to be brought in a purported representative
        capacity on behalf of the general public or any other persons.
        <br />
        <br />
        The Parties agree that the following Disputes are not subject to the
        above provisions concerning informal negotiations: (a) any Disputes
        seeking to enforce or protect, or concerning the validity of, any of the
        intellectual property rights of a Party; (b) any Dispute related to, or
        arising from, allegations of theft, piracy, invasion of privacy, or
        unauthorized use; and (c) any claim for injunctive relief.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">XIV. CORRECTIONS</h3>
      <p className="body-2 pb-5">
        There may be information on the Site that contains typographical errors,
        inaccuracies, or omissions that may relate to the Marketplace Offerings,
        including descriptions, pricing, offers, availability, and various other
        information. We reserve the right to correct any errors, inaccuracies,
        or omissions and to change or update the information on the Site at any
        time, without prior notice or intimation, and such changes shall be
        applicable to the Users even in cases if they have acted upon any
        errors, inaccuracies, or omissions.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">XV. DISCLAIMER</h3>
      <p className="body-2 pb-5">
        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT
        YOUR USE OF THE SITE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST
        EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
        IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT
        LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
        REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S
        CONTENT, USER CONTRIBUTIONS, OR THE CONTENT OF ANY WEBSITES LINKED TO
        THIS SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1)
        ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
        INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
        ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF
        OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
        FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION
        OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN
        HORSES, MALWARES OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE
        SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY
        CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS
        A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
        MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR
        ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
        BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY
        WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER
        ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE
        OR OBLIGATED FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
        THIRD-PARTY PROVIDERS OF DIGITAL PRODUCTS OR SERVICES. AS WITH THE
        PURCHASE OF A DIGITAL PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
        ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE DUE CAUTION
        WHERE APPROPRIATE.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        XVI. LIMITATIONS OF LIABILITY
      </h3>
      <p className="body-2 pb-5">
        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, REPRESENTATIVES OR
        AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
        CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, TREBLE OR PUNITIVE
        DAMAGES OR PENALTIES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA,
        LOSS OF OPPORTUNITY, OR OTHER DAMAGES, PENALTIES OR CLAIMS ARISING FROM
        YOUR ACCESS AND/OR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES, PENALTIES OR CLAIMS.
        <br />
        <br />
        NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY
        TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE
        ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID,
        IF ANY, BY YOU TO US OR THE AVERAGE VALUE OF PRICE IN THE MARKETPLACE
        OFFERING OF THE SITE.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">XVII. INDEMNIFICATION</h3>
      <p className="body-2 pb-5">
        You agree to defend, indemnify, and hold us wholly and completely
        harmless, including our subsidiaries, affiliates, and all of our
        respective officers, representatives, agents, partners, and employees,
        from and against any loss, damage, liability, claim, action, or demand,
        including reasonable attorneys’ fees and expenses, made by any third
        party due to or arising out of or in connection with:
        <br />
        <br />
        <ol>
          <li>access or use of the Site;</li>
          <li>breach of these Terms of Service and User Agreement;</li>
          <li>
            any breach of your representations and warranties set forth in these
            Terms of Service and User Agreement;
          </li>
          <li>
            your violation of the rights of a third party, including but not
            limited to intellectual property rights and other legal rights; or
          </li>
          <li>
            any overt harmful act, whether intentional or unintentional, toward
            any other user of the Site with whom you either connected or got
            information about via the Site.
          </li>
        </ol>
        Notwithstanding the foregoing, we reserve the right, at your cost and
        expense, to assume the exclusive defense, counterclaim and control of
        any matter for which you are required to indemnify us, and you agree to
        cooperate, at your cost and expense, with our defense or counterclaim of
        such claims. We will use reasonable efforts to notify you of any such
        claim, action, or proceeding which is subject to this indemnification
        upon becoming aware of it and assessing the merits of it.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">XVIII. USER DATA</h3>
      <p className="body-2 pb-5">
        We will maintain certain data that you transmit or contribute to the
        Site for the purpose of managing the performance of the Site, as well as
        data relating to your use of the Site. Although we perform regular
        routine backups of data, you are solely responsible for all data that
        you transmit or contribute, or that relates to any activity you have
        undertaken by accessing or using the Site. You agree that we shall have
        no liability to you for any loss or corruption of any such data, and you
        hereby waive any right of action against us arising from any such loss
        or corruption of such data.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">
        XIX. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
      </h3>
      <p className="body-2 pb-5">
        Visiting the Site, sending us emails, and completing online forms
        constitute electronic communications. You consent to receive electronic
        communications, and you agree that all agreements, notices, disclosures,
        and other communications we provide to you electronically, via email and
        on the Site, satisfy any legal requirement that such communication be in
        writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
        CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
        NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY
        US OR VIA THE SITE. You hereby waive any rights or requirements under
        any statutes, regulations, rules, ordinances, or other laws in any
        jurisdiction which require an original signature or delivery or
        retention of non-electronic records, or to payments or the granting of
        credits by any means other than electronic means.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">XX. MISCELLANEOUS</h3>
      <p className="body-2 pb-5">
        These Terms of Service and User Agreement and any policies or operating
        rules posted by us on the Site or in respect to the Site constitute the
        entire agreement and understanding between you and us. Our failure or
        delay in exercising or enforcing any right or provision of these Terms
        of Service and User Agreement shall not operate as a waiver of such
        right or provision. These Terms of Service and User Agreement operate to
        the fullest extent permissible by law. We may assign any or all of our
        rights and obligations to others at any time without any notice or
        intimation. We shall not be responsible or liable for any loss, damage,
        delay, or failure to act caused by any reason or cause beyond our
        reasonable control. If any provision or part of a provision of these
        Terms of Service and User Agreement is determined to be unlawful, void,
        or unenforceable, that provision or part of the provision is deemed
        severable from these Terms of Service and User Agreement and does not
        affect the validity and enforceability of any remaining provisions.
        There is no joint venture, partnership, employment or agency
        relationship created between you and us as a result of these Terms of
        Service and User Agreement or access or use of the Site. You agree that
        these Terms of Service and User Agreement will not be construed against
        us by virtue of having drafted them. You hereby waive any and all
        defenses you may have based on the electronic form of these Terms of
        Service and User Agreement and the lack of signing by the parties hereto
        to execute these Terms of Service and User Agreement.
      </p>
      <h3 className="lilita-font heading-5 shadow-3">XXI. CONTACT US</h3>
      <p className="body-2 pb-5">
        In order to resolve a complaint regarding the Site or to receive further
        information regarding use of the Site, please contact us at
        legal@motionmiracles.com.
      </p>
    </div>
  );
};

export default TermsPage;
