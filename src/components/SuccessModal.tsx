

interface SuccessModalProps {
  isOpen: boolean;
  userEmail: string;
  whatsappLink: string;
  onClose: () => void;
  onWhatsAppClick: () => void;
}

export default function SuccessModal({
  isOpen,
  userEmail,
  whatsappLink,
  onClose,
  onWhatsAppClick,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full space-y-6 p-8">
        {/* Success Icon */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mx-auto mb-4">
            <span className="text-3xl">✅</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome to TeamQora!</h2>
        </div>

        {/* Message */}
        <div className="text-center space-y-2">
          <p className="text-gray-600">
            Thank you for joining our waitlist! A confirmation has been sent to:
          </p>
          <p className="font-semibold text-gray-900">{userEmail}</p>
        </div>

        {/* WhatsApp Button */}
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhatsAppClick}
            className="block w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 text-center transition"
          >
            Join WhatsApp Community
          </a>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}