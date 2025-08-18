import { useEffect, useRef, useState } from "react";

import commentsIcon from "../../assets/img/question-solid-full.svg";

import "./SupportButton.scss";

/**
 * @description   Floating support button that opens a contact overlay.
 *                Allows the user to either send an email to the support team
 *                or start a WhatsApp conversation with a predefined message.
 * @author        Sebastián Saldarriaga
 * @dateCreation  11-08-2025
 * @lastUpdatedBy Sebastián Saldarriaga
 * @lastUpdatedOn 11-08-2025
 */
const SupportButton = () => {
  // Ref to detect clicks outside overlay
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  // State to control overlay visibility
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Opens WhatsApp Web with a predefined support message.
   * Closes the overlay after opening the chat.
   */
  const openWhatsApp = () => {
    // Predefined message for WhatsApp support
    const message = encodeURIComponent(
      "Hello, I need support with my account. Could you please assist me?"
    );

    // Opens WhatsApp Web in a new tab
    window.open(`https://wa.me/573116112916?text=${message}`, "_blank");

    // Closes the overlay
    setIsOpen(false);
  };

  /**
   * Detect clicks outside the overlay and close it
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!isOpen) return;

      const target = event.target as Node;

      // Si el click es dentro del overlay, no cerrar
      if (overlayRef.current?.contains(target)) return;

      // Si el click es dentro del botón, no cerrar (el propio botón maneja su toggle)
      if (buttonRef.current?.contains(target)) return;

      // Si llegó aquí, cerrar
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className='support-wrapper cursor-pointer'
        onClick={() => setIsOpen((s) => !s)}
        ref={buttonRef}
        aria-label="Open support"
      >
        <h2>
          Need Help? <br />
          Click here for support
        </h2>

        <div
          ref={buttonRef}
          className="support-btn"
          aria-label="Open support"
        >
          <img src={commentsIcon} alt="Support" />
        </div>
      </div>

      {isOpen && (
        <div
          ref={overlayRef}
          className='support-overlay'
        >
          <div className="support-overlay-content">
            <p className="support-text">
              Need help? Our support team is ready — contact us at:
            </p>
            <p className="support-email">support@roboticaxai.com</p>
            <button className="btn-whatsapp" onClick={openWhatsApp}>
              <span className="wa-icon">💬</span> Contact via WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportButton;
