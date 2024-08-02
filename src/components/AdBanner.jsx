import { useEffect } from "react";

const AdBanner = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block",
        overflow: "hidden",
      }}
      data-ad-client="ca-pub-4421463422364704"
      {...props}
    />
  );
};
export default AdBanner;
