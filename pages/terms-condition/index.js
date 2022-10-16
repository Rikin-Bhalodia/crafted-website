import React from "react";
import styled from "styled-components";
import Link from "next/link";

const TermsConditionWrapper = styled.div`
  padding: 0 200px 50px;
  .heading {
    width: 100%;
    height: 300px;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #535155;
    font-style: italic;
    line-height: 76px;
    text-align: center;
  }
  p {
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
    line-height: 1.5em;
    letter-spacing: 0.5px;
    text-transform: capitalize;
  }
  p b {
    font-size: 20px;
  }
  a {
    color: blue;
  }
  div {
    padding-top: 20px;
    font-size: 35px;
    font-family: "Libre Baskerville", Georgia, Times, serif;
    color: #535155;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 150px 40px;
    .heading {
      font-size: 45px;
      line-height: 55px;
    }
    div {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0 100px 40px;
    .heading {
      font-size: 40px;
      height: 200px;
    }
    div {
      font-size: 27px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0 70px 30px;
    .heading {
      font-size: 35px;
      line-height: 40px;
    }
    div {
      font-size: 25px;
    }
    p {
      font-size: 16px;
    }
    p b {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 0 20px 20px;
    .heading {
      font-size: 25px;
      height: 170px;
    }
    div {
      font-size: 23px;
    }
  }
`;

const TermsCondition = () => {
  return (
    <TermsConditionWrapper>
      <div className="heading">
        <b>TERMS AND CONDITIONS</b>
      </div>
      <p>Last updated: 2022-10-11</p>
      <div>
        1. <b>Introduction</b>
      </div>
      <p>
        Welcome to <b>Crafted Neem Tree Pvt. Ltd.</b> (“Company”, “we”, “our”,
        “us”)!
      </p>
      <p>
        These Terms of Service (“Terms”, “Terms of Service”) govern your use of
        our website located at <b>TheCrafted.in</b> (together or individually
        “Service”) operated by <b>Crafted Neem Tree Pvt. Ltd.</b>.
      </p>
      <p>
        Our Privacy Policy also governs your use of our Service and explains how
        we collect, safeguard and disclose information that results from your
        use of our web pages.
      </p>
      <p>
        Your agreement with us includes these Terms and our Privacy Policy
        (“Agreements”). You acknowledge that you have read and understood
        Agreements, and agree to be bound of them.
      </p>
      <p>
        If you do not agree with (or cannot comply with) Agreements, then you
        may not use the Service, but please let us know by emailing at{" "}
        <b>thecraftedyou@gmail.com</b> so we can try to find a solution. These
        Terms apply to all visitors, users and others who wish to access or use
        Service.
      </p>
      <div>
        2. <b>Communications</b>
      </div>
      <p>
        By using our Service, you agree to subscribe to newsletters, marketing
        or promotional materials and other information we may send. However, you
        may opt out of receiving any, or all, of these communications from us by
        following the unsubscribe link or by emailing at
        thecraftedyou@gmail.com.
      </p>
      <div>
        3. <b>Purchases</b>
      </div>
      <p>
        If you wish to purchase any product or service made available through
        Service (“Purchase”), you may be asked to supply certain information
        relevant to your Purchase including but not limited to, your credit or
        debit card number, the expiration date of your card, your billing
        address, and your shipping information.
      </p>
      <p>
        You represent and warrant that: (i) you have the legal right to use any
        card(s) or other payment method(s) in connection with any Purchase; and
        that (ii) the information you supply to us is true, correct and
        complete.
      </p>
      <p>
        We may employ the use of third party services for the purpose of
        facilitating payment and the completion of Purchases. By submitting your
        information, you grant us the right to provide the information to these
        third parties subject to our Privacy Policy.
      </p>
      <p>
        We reserve the right to refuse or cancel your order at any time for
        reasons including but not limited to: product or service availability,
        errors in the description or price of the product or service, error in
        your order or other reasons.
      </p>
      <p>
        We reserve the right to refuse or cancel your order if fraud or an
        unauthorized or illegal transaction is suspected.
      </p>
      <div>
        4. <b>Contests, Sweepstakes and Promotions</b>
      </div>
      <p>
        Any contests, sweepstakes or other promotions (collectively,
        “Promotions”) made available through Service may be governed by rules
        that are separate from these Terms of Service. If you participate in any
        Promotions, please review the applicable rules as well as our Privacy
        Policy. If the rules for a Promotion conflict with these Terms of
        Service, Promotion rules will apply.
      </p>
      <div>
        5. <b>Subscriptions</b>
      </div>
      <p>
        Some parts of Service are billed on a subscription basis
        ("Subscription(s)"). You will be billed in advance on a recurring and
        periodic basis ("Billing Cycle"). Billing cycles will be set depending
        on the type of subscription plan you select when purchasing a
        Subscription.
      </p>
      <p>
        At the end of each Billing Cycle, your Subscription will automatically
        renew under the exact same conditions unless you cancel it or Crafted
        Neem Tree Pvt. Ltd. cancels it. You may cancel your Subscription renewal
        either through your online account management page or by contacting
        thecraftedyou@gmail.com customer support team.
      </p>
      <p>
        A valid payment method is required to process the payment for your
        subscription. You shall provide Crafted Neem Tree Pvt. Ltd. with
        accurate and complete billing information that may include but not
        limited to full name, address, state, postal or zip code, telephone
        number, and a valid payment method information. By submitting such
        payment information, you automatically authorize Crafted Neem Tree Pvt.
        Ltd. to charge all Subscription fees incurred through your account to
        any such payment instruments.
      </p>
      <p>
        Should automatic billing fail to occur for any reason, Crafted Neem Tree
        Pvt. Ltd. reserves the right to terminate your access to the Service
        with immediate effect.
      </p>
      <div>
        6. <b>Free Trial</b>
      </div>
      <p>
        Crafted Neem Tree Pvt. Ltd. may, at its sole discretion, offer a
        Subscription with a free trial for a limited period of time ("Free
        Trial").
      </p>
      <p>
        You may be required to enter your billing information in order to sign
        up for Free Trial.
      </p>
      <p>
        If you do enter your billing information when signing up for Free Trial,
        you will not be charged by Crafted Neem Tree Pvt. Ltd. until Free Trial
        has expired. On the last day of Free Trial period, unless you cancelled
        your Subscription, you will be automatically charged the applicable
        Subscription fees for the type of Subscription you have selected.
      </p>
      <p>
        At any time and without notice, Crafted Neem Tree Pvt. Ltd. reserves the
        right to (i) modify Terms of Service of Free Trial offer, or (ii) cancel
        such Free Trial offer.
      </p>
      <div>
        7. <b>Fee Changes</b>
      </div>
      <p>
        Crafted Neem Tree Pvt. Ltd., in its sole discretion and at any time, may
        modify Subscription fees for the Subscriptions. Any Subscription fee
        change will become effective at the end of the then-current Billing
        Cycle.
      </p>
      <p>
        Crafted Neem Tree Pvt. Ltd. will provide you with a reasonable prior
        notice of any change in Subscription fees to give you an opportunity to
        terminate your Subscription before such change becomes effective.
      </p>
      <p>
        Your continued use of Service after Subscription fee change comes into
        effect constitutes your agreement to pay the modified Subscription fee
        amount.
      </p>
      <div>
        8. <b>Refunds</b>
      </div>
      <p>
        We issue refunds for Contracts within <b>7 days</b> of the original
        purchase of the Contract.
      </p>
      <div>
        9. <b>Content</b>
      </div>
      <p>
        Our Service allows you to post, link, store, share and otherwise make
        available certain information, text, graphics, videos, or other material
        (“Content”). You are responsible for Content that you post on or through
        Service, including its legality, reliability, and appropriateness.
      </p>
      <p>
        By posting Content on or through Service, You represent and warrant
        that: (i) Content is yours (you own it) and/or you have the right to use
        it and the right to grant us the rights and license as provided in these
        Terms, and (ii) that the posting of your Content on or through Service
        does not violate the privacy rights, publicity rights, copyrights,
        contract rights or any other rights of any person or entity. We reserve
        the right to terminate the account of anyone found to be infringing on a
        copyright.
      </p>
      <p>
        You retain any and all of your rights to any Content you submit, post or
        display on or through Service and you are responsible for protecting
        those rights. We take no responsibility and assume no liability for
        Content you or any third party posts on or through Service. However, by
        posting Content using Service you grant us the right and license to use,
        modify, publicly perform, publicly display, reproduce, and distribute
        such Content on and through Service. You agree that this license
        includes the right for us to make your Content available to other users
        of Service, who may also use your Content subject to these Terms.
      </p>
      <p>
        Crafted Neem Tree Pvt. Ltd. has the right but not the obligation to
        monitor and edit all Content provided by users.
      </p>
      <p>
        In addition, Content found on or through this Service are the property
        of Crafted Neem Tree Pvt. Ltd. or used with permission. You may not
        distribute, modify, transmit, reuse, download, repost, copy, or use said
        Content, whether in whole or in part, for commercial purposes or for
        personal gain, without express advance written permission from us.
      </p>
      <div>
        10. <b>Prohibited Uses</b>
      </div>
      <p>
        You may use Service only for lawful purposes and in accordance with
        Terms. You agree not to use Service:
      </p>
      <p>
        0.1. In any way that violates any applicable national or international
        law or regulation.
      </p>
      <p>
        0.2. For the purpose of exploiting, harming, or attempting to exploit or
        harm minors in any way by exposing them to inappropriate content or
        otherwise.
      </p>
      <p>
        0.3. To transmit, or procure the sending of, any advertising or
        promotional material, including any “junk mail”, “chain letter,” “spam,”
        or any other similar solicitation.
      </p>
      <p>
        0.4. To impersonate or attempt to impersonate Company, a Company
        employee, another user, or any other person or entity.
      </p>
      <p>
        0.5. In any way that infringes upon the rights of others, or in any way
        is illegal, threatening, fraudulent, or harmful, or in connection with
        any unlawful, illegal, fraudulent, or harmful purpose or activity.
      </p>
      <p>
        0.6. To engage in any other conduct that restricts or inhibits anyone’s
        use or enjoyment of Service, or which, as determined by us, may harm or
        offend Company or users of Service or expose them to liability.
      </p>
      <p>Additionally, you agree not to:</p>
      <p>
        0.1. Use Service in any manner that could disable, overburden, damage,
        or impair Service or interfere with any other party’s use of Service,
        including their ability to engage in real time activities through
        Service.
      </p>
      <p>
        0.2. Use any robot, spider, or other automatic device, process, or means
        to access Service for any purpose, including monitoring or copying any
        of the material on Service.
      </p>
      <p>
        0.3. Use any manual process to monitor or copy any of the material on
        Service or for any other unauthorized purpose without our prior written
        consent.
      </p>
      <p>
        0.4. Use any device, software, or routine that interferes with the
        proper working of Service.
      </p>
      <p>
        0.5. Introduce any viruses, trojan horses, worms, logic bombs, or other
        material which is malicious or technologically harmful.
      </p>
      <p>
        0.6. Attempt to gain unauthorized access to, interfere with, damage, or
        disrupt any parts of Service, the server on which Service is stored, or
        any server, computer, or database connected to Service.
      </p>
      <p>
        0.7. Attack Service via a denial-of-service attack or a distributed
        denial-of-service attack.
      </p>
      <p>0.8. Take any action that may damage or falsify Company rating.</p>
      <p>
        0.9. Otherwise attempt to interfere with the proper working of Service.
      </p>
      <div>
        11. <b>Analytics</b>
      </div>
      <p>
        We may use third-party Service Providers to monitor and analyze the use
        of our Service.
      </p>
      <div>
        12. <b>No Use By Minors</b>
      </div>
      <p>
        Service is intended only for access and use by individuals at least
        eighteen (18) years old. By accessing or using Service, you warrant and
        represent that you are at least eighteen (18) years of age and with the
        full authority, right, and capacity to enter into this agreement and
        abide by all of the terms and conditions of Terms. If you are not at
        least eighteen (18) years old, you are prohibited from both the access
        and usage of Service.
      </p>
      <div>
        13. <b>Accounts</b>
      </div>
      <p>
        When you create an account with us, you guarantee that you are above the
        age of 18, and that the information you provide us is accurate,
        complete, and current at all times. Inaccurate, incomplete, or obsolete
        information may result in the immediate termination of your account on
        Service.
      </p>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and password, including but not limited to the restriction of access to
        your computer and/or account. You agree to accept responsibility for any
        and all activities or actions that occur under your account and/or
        password, whether your password is with our Service or a third-party
        service. You must notify us immediately upon becoming aware of any
        breach of security or unauthorized use of your account.
      </p>
      <p>
        You may not use as a username the name of another person or entity or
        that is not lawfully available for use, a name or trademark that is
        subject to any rights of another person or entity other than you,
        without appropriate authorization. You may not use as a username any
        name that is offensive, vulgar or obscene.
      </p>
      <p>
        We reserve the right to refuse service, terminate accounts, remove or
        edit content, or cancel orders in our sole discretion.
      </p>
      <div>
        14. <b>Intellectual Property</b>
      </div>
      <p>
        Service and its original content (excluding Content provided by users),
        features and functionality are and will remain the exclusive property of
        Crafted Neem Tree Pvt. Ltd. and its licensors. Service is protected by
        copyright, trademark, and other laws of and foreign countries. Our
        trademarks may not be used in connection with any product or service
        without the prior written consent of Crafted Neem Tree Pvt. Ltd..
      </p>
      <div>
        15. <b>Copyright Policy</b>
      </div>
      <p>
        We respect the intellectual property rights of others. It is our policy
        to respond to any claim that Content posted on Service infringes on the
        copyright or other intellectual property rights (“Infringement”) of any
        person or entity.
      </p>
      <p>
        If you are a copyright owner, or authorized on behalf of one, and you
        believe that the copyrighted work has been copied in a way that
        constitutes copyright infringement, please submit your claim via email
        to thecraftedyou@gmail.com, with the subject line: “Copyright
        Infringement” and include in your claim a detailed description of the
        alleged Infringement as detailed below, under “DMCA Notice and Procedure
        for Copyright Infringement Claims”
      </p>
      <p>
        You may be held accountable for damages (including costs and attorneys’
        fees) for misrepresentation or bad-faith claims on the infringement of
        any Content found on and/or through Service on your copyright.
      </p>
      <div>
        16. <b>DMCA Notice and Procedure for Copyright Infringement Claims</b>
      </div>
      <p>
        You may submit a notification pursuant to the Digital Millennium
        Copyright Act (DMCA) by providing our Copyright Agent with the following
        information in writing (see 17 U.S.C 512(c)(3) for further detail):
      </p>
      <p>
        0.1. an electronic or physical signature of the person authorized to act
        on behalf of the owner of the copyright’s interest;
      </p>
      <p>
        0.2. a description of the copyrighted work that you claim has been
        infringed, including the URL (i.e., web page address) of the location
        where the copyrighted work exists or a copy of the copyrighted work;
      </p>
      <p>
        0.3. identification of the URL or other specific location on Service
        where the material that you claim is infringing is located;
      </p>
      <p>0.4. your address, telephone number, and email address;</p>
      <p>
        0.5. a statement by you that you have a good faith belief that the
        disputed use is not authorized by the copyright owner, its agent, or the
        law;
      </p>
      <p>
        0.6. a statement by you, made under penalty of perjury, that the above
        information in your notice is accurate and that you are the copyright
        owner or authorized to act on the copyright owner’s behalf.
      </p>
      <p>
        You can contact our Copyright Agent via email at
        thecraftedyou@gmail.com.
      </p>
      <div>
        17. <b>Error Reporting and Feedback</b>
      </div>
      <p>
        You may provide us either directly at thecraftedyou@gmail.com or via
        third party sites and tools with information and feedback concerning
        errors, suggestions for improvements, ideas, problems, complaints, and
        other matters related to our Service (“Feedback”). You acknowledge and
        agree that: (i) you shall not retain, acquire or assert any intellectual
        property right or other right, title or interest in or to the Feedback;
        (ii) Company may have development ideas similar to the Feedback; (iii)
        Feedback does not contain confidential information or proprietary
        information from you or any third party; and (iv) Company is not under
        any obligation of confidentiality with respect to the Feedback. In the
        event the transfer of the ownership to the Feedback is not possible due
        to applicable mandatory laws, you grant Company and its affiliates an
        exclusive, transferable, irrevocable, free-of-charge, sub-licensable,
        unlimited and perpetual right to use (including copy, modify, create
        derivative works, publish, distribute and commercialize) Feedback in any
        manner and for any purpose.
      </p>
      <div>
        18. <b>Links To Other Web Sites</b>
      </div>
      <p>
        Our Service may contain links to third party web sites or services that
        are not owned or controlled by Crafted Neem Tree Pvt. Ltd..
      </p>
      <p>
        Crafted Neem Tree Pvt. Ltd. has no control over, and assumes no
        responsibility for the content, privacy policies, or practices of any
        third party web sites or services. We do not warrant the offerings of
        any of these entities/individuals or their websites.
      </p>
      <p>
        For example, the outlined{" "}
        <Link href="https://policymaker.io/terms-and-conditions/">
          Terms of Use
        </Link>
        have been created using{" "}
        <Link href="https://policymaker.io/">PolicyMaker.io</Link>, a free web
        application for generating high-quality legal documents. PolicyMaker’s{" "}
        <Link href="https://policymaker.io/terms-and-conditions/">
          Terms and Conditions generator
        </Link>{" "}
        is an easy-to-use free tool for creating an excellent standard Terms of
        Service template for a website, blog, e-commerce store or app.
      </p>
      <p>
        You Acknowledge And Agree That Company Shall Not Be Responsible Or
        Liable, Directly Or Indirectly, For Any Damage Or Loss Caused Or Alleged
        To Be Caused By Or In Connection With Use Of Or Reliance On Any Such
        Content, Goods Or Services Available On Or Through Any Such Third Party
        Web Sites Or Services.
      </p>
      <p>
        We Strongly Advise You To Read The Terms Of Service And Privacy Policies
        Of Any Third Party Web Sites Or Services That You Visit.
      </p>
      <div>
        19. <b>Disclaimer Of Warranty</b>
      </div>
      <p>
        These Services Are Provided By Company On An “as Is” And “as Available”
        Basis. Company Makes No Representations Or Warranties Of Any Kind,
        Express Or Implied, As To The Operation Of Their Services, Or The
        Information, Content Or Materials Included Therein. You Expressly Agree
        That Your Use Of These Services, Their Content, And Any Services Or
        Items Obtained From Us Is At Your Sole Risk.
      </p>
      <p>
        Neither Company Nor Any Person Associated With Company Makes Any
        Warranty Or Representation With Respect To The Completeness, Security,
        Reliability, Quality, Accuracy, Or Availability Of The Services. Without
        Limiting The Foregoing, Neither Company Nor Anyone Associated With
        Company Represents Or Warrants That The Services, Their Content, Or Any
        Services Or Items Obtained Through The Services Will Be Accurate,
        Reliable, Error-free, Or Uninterrupted, That Defects Will Be Corrected,
        That The Services Or The Server That Makes It Available Are Free Of
        Viruses Or Other Harmful Components Or That The Services Or Any Services
        Or Items Obtained Through The Services Will Otherwise Meet Your Needs Or
        Expectations.
      </p>
      <p>
        Company Hereby Disclaims All Warranties Of Any Kind, Whether Express Or
        Implied, Statutory, Or Otherwise, Including But Not Limited To Any
        Warranties Of Merchantability, Non-infringement, And Fitness For
        Particular Purpose.
      </p>
      <p>
        The Foregoing Does Not Affect Any Warranties Which Cannot Be Excluded Or
        Limited Under Applicable Law.
      </p>
      <div>
        20. <b>Limitation Of Liability</b>
      </div>
      <p>
        Except As Prohibited By Law, You Will Hold Us And Our Officers,
        Directors, Employees, And Agents Harmless For Any Indirect, Punitive,
        Special, Incidental, Or Consequential Damage, However It Arises
        (including Attorneys' Fees And All Related Costs And Expenses Of
        Litigation And Arbitration, Or At Trial Or On Appeal, If Any, Whether Or
        Not Litigation Or Arbitration Is Instituted), Whether In An Action Of
        Contract, Negligence, Or Other Tortious Action, Or Arising Out Of Or In
        Connection With This Agreement, Including Without Limitation Any Claim
        For Personal Injury Or Property Damage, Arising From This Agreement And
        Any Violation By You Of Any Federal, State, Or Local Laws, Statutes,
        Rules, Or Regulations, Even If Company Has Been Previously Advised Of
        The Possibility Of Such Damage. Except As Prohibited By Law, If There Is
        Liability Found On The Part Of Company, It Will Be Limited To The Amount
        Paid For The Products And/or Services, And Under No Circumstances Will
        There Be Consequential Or Punitive Damages. Some States Do Not Allow The
        Exclusion Or Limitation Of Punitive, Incidental Or Consequential
        Damages, So The Prior Limitation Or Exclusion May Not Apply To You.
      </p>
      <div>
        21. <b>Termination</b>
      </div>
      <p>
        We may terminate or suspend your account and bar access to Service
        immediately, without prior notice or liability, under our sole
        discretion, for any reason whatsoever and without limitation, including
        but not limited to a breach of Terms.
      </p>
      <p>
        If you wish to terminate your account, you may simply discontinue using
        Service.
      </p>
      <p>
        All provisions of Terms which by their nature should survive termination
        shall survive termination, including, without limitation, ownership
        provisions, warranty disclaimers, indemnity and limitations of
        liability.
      </p>
      <div>
        22. <b>Governing Law</b>
      </div>
      <p>
        These Terms shall be governed and construed in accordance with the laws
        of India, which governing law applies to agreement without regard to its
        conflict of law provisions.
      </p>
      <p>
        Our failure to enforce any right or provision of these Terms will not be
        considered a waiver of those rights. If any provision of these Terms is
        held to be invalid or unenforceable by a court, the remaining provisions
        of these Terms will remain in effect. These Terms constitute the entire
        agreement between us regarding our Service and supersede and replace any
        prior agreements we might have had between us regarding Service.
      </p>
      <div>
        23. <b>Changes To Service</b>
      </div>
      <p>
        We reserve the right to withdraw or amend our Service, and any service
        or material we provide via Service, in our sole discretion without
        notice. We will not be liable if for any reason all or any part of
        Service is unavailable at any time or for any period. From time to time,
        we may restrict access to some parts of Service, or the entire Service,
        to users, including registered users.
      </p>
      <div>
        24. <b>Amendments To Terms</b>
      </div>
      <p>
        We may amend Terms at any time by posting the amended terms on this
        site. It is your responsibility to review these Terms periodically.
      </p>
      <p>
        Your continued use of the Platform following the posting of revised
        Terms means that you accept and agree to the changes. You are expected
        to check this page frequently so you are aware of any changes, as they
        are binding on you.
      </p>
      <p>
        By continuing to access or use our Service after any revisions become
        effective, you agree to be bound by the revised terms. If you do not
        agree to the new terms, you are no longer authorized to use Service.
      </p>
      <div>
        25. <b>Waiver And Severability</b>
      </div>
      <p>
        No waiver by Company of any term or condition set forth in Terms shall
        be deemed a further or continuing waiver of such term or condition or a
        waiver of any other term or condition, and any failure of Company to
        assert a right or provision under Terms shall not constitute a waiver of
        such right or provision.
      </p>
      <p>
        If any provision of Terms is held by a court or other tribunal of
        competent jurisdiction to be invalid, illegal or unenforceable for any
        reason, such provision shall be eliminated or limited to the minimum
        extent such that the remaining provisions of Terms will continue in full
        force and effect.
      </p>
      <div>
        26. <b>Acknowledgement</b>
      </div>
      <p>
        By Using Service Or Other Services Provided By Us, You Acknowledge That
        You Have Read These Terms Of Service And Agree To Be Bound By Them.
      </p>
      <div>
        27. <b>Contact Us</b>
      </div>
      <p>
        Please send your feedback, comments, requests for technical support by
        email: <b>thecraftedyou@gmail.com</b>.
      </p>
      <p style={{ marginTop: "5em", fontSize: "0.8em", textAlign: "center" }}>
        These{" "}
        <Link href="https://policymaker.io/terms-and-conditions/">
          Terms of Service
        </Link>{" "}
        were created for <b>TheCrafted.in</b> by{" "}
        <Link href="https://policymaker.io">PolicyMaker.io</Link> on 2022-10-11.
      </p>
    </TermsConditionWrapper>
  );
};

export default TermsCondition;
