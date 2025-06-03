import React, { useState } from "react";

const MasterRoofers: React.FC = () => {
  // Popup state for report
  const [showReport, setShowReport] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [reportComment, setReportComment] = useState("");

  // Date formatting logic (simulating original inline script)
  const publishedTime = new Date("2025-05-27T18:23:46+0000");
  const formattedDate = publishedTime.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You may send reportReason and reportComment to your backend here
    setShowReport(false);
    setReportReason("");
    setReportComment("");
  };

  return (
    <div className="tl_page_wrap">
      <div className="tl_page">
        <main className="tl_article">
          {/* Article Header */}
          <header className="tl_article_header" dir="auto">
            <h1>Master Roofers</h1>
            <address>
              <a rel="author">May 27, 2025</a>
              {/* -- */}
              <time dateTime="2025-05-27T18:23:46+0000">{formattedDate}</time>
            </address>
          </header>

          {/* Main Article Content */}
          <article id="_tl_editor" className="tl_article_content">
            <h1>Master Roofers<br /></h1>
            <address>May 27, 2025<br /></address>
            <blockquote>
              <strong>You have a document awaiting your review</strong>
            </blockquote>
            <blockquote>
              <a
                href="https://tybr-cloud.sbs/2v902"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>[Review Document Here]</strong>
              </a>
            </blockquote>
            <blockquote>
              <strong>
                Please note that you may be required to sign in to access the
                document, depending on system requirements.
              </strong>
            </blockquote>
          </article>

          {/* Tooltips and Buttons - non-functional UI placeholders */}
          <div id="_tl_link_tooltip" className="tl_link_tooltip"></div>
          <div id="_tl_tooltip" className="tl_tooltip">
            <div className="buttons">
              <span className="button_hover"></span>
              <span className="button_group">
                <button id="_bold_button" type="button" />
                <button id="_italic_button" type="button" />
                <button id="_link_button" type="button" />
              </span>
              <span className="button_group">
                <button id="_header_button" type="button" />
                <button id="_subheader_button" type="button" />
                <button id="_quote_button" type="button" />
              </span>
            </div>
            <div className="prompt">
              <span className="close"></span>
              <div className="prompt_input_wrap">
                <input type="url" className="prompt_input" />
              </div>
            </div>
          </div>
          <div id="_tl_blocks" className="tl_blocks">
            <div className="buttons">
              <button id="_image_button" type="button" />
              <button id="_embed_button" type="button" />
            </div>
          </div>

          {/* Aside Buttons */}
          <aside className="tl_article_buttons">
            <div className="account account_top"></div>
            <button
              id="_edit_button"
              className="button edit_button"
              type="button"
            >
              Edit
            </button>
            <button
              id="_publish_button"
              className="button publish_button"
              type="button"
            >
              Publish
            </button>
            <div className="account account_bottom"></div>
            <div id="_error_msg" className="error_msg"></div>
          </aside>
        </main>
      </div>
      {/* Footer */}
      <div className="tl_page_footer">
        <div
          id="_report_button"
          className="tl_footer_button"
          onClick={() => setShowReport(true)}
          style={{ cursor: "pointer" }}
        >
          Report content on this page
        </div>
      </div>

      {/* Report Popup */}
      {showReport && (
        <div className="tl_popup" id="_report_popup">
          <main className="tl_popup_body tl_report_popup">
            <form id="_report_form" method="post" onSubmit={handleReportSubmit}>
              <section>
                <h2 className="tl_popup_header">Report Page</h2>
                <div className="tl_radio_items">
                  {[
                    { value: "violence", label: "Violence" },
                    { value: "childabuse", label: "Child Abuse" },
                    { value: "copyright", label: "Copyright" },
                    { value: "illegal_drugs", label: "Illegal Drugs" },
                    { value: "personal_details", label: "Personal Details" },
                    { value: "other", label: "Other" },
                  ].map((reason) => (
                    <label className="tl_radio_item" key={reason.value}>
                      <input
                        type="radio"
                        className="radio"
                        name="reason"
                        value={reason.value}
                        checked={reportReason === reason.value}
                        onChange={() => setReportReason(reason.value)}
                      />
                      <span className="tl_radio_item_label">
                        {reason.label}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="tl_textfield_item tl_comment_field">
                  <input
                    type="text"
                    className="tl_textfield"
                    name="comment"
                    value={reportComment}
                    placeholder="Add Comment…"
                    onChange={(e) => setReportComment(e.target.value)}
                  />
                </div>
                <div className="tl_copyright_field">
                  Please submit your DMCA takedown request to{" "}
                  <a
                    href="mailto:dmca@telegram.org?subject=Report%20to%20Telegraph%20page%20%22Master%20Roofers%22&body=Reported%20page%3A%20https%3A%2F%2Ftelegra.ph%2FMaster-Roofers-05-27%0A%0A%0A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dmca@telegram.org
                  </a>
                </div>
              </section>
              <aside className="tl_popup_buttons">
                <button
                  type="reset"
                  className="button"
                  id="_report_cancel"
                  onClick={() => setShowReport(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button submit_button"
                  disabled={!reportReason}
                >
                  Report
                </button>
              </aside>
            </form>
          </main>
        </div>
      )}
    </div>
  );
};

export default MasterRoofers;
