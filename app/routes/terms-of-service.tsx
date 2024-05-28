import Markdown from "markdown-to-jsx";
import termsOfService from "../assets/documents/data-terms-of-service.md";
import { waiverStyling } from "~/utils/js.util";

export default function TermsOfService() {
  return (
    <div className="px-5 py-5 pb-10 bg-white">
      <Markdown
        options={{
          overrides: waiverStyling,
        }}
      >
        {String(termsOfService)}
      </Markdown>
    </div>
  );
}
