import React, { useEffect, useRef } from "react";

function Camera() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "480px",
          height: "360px",
          borderRadius: "12px",
          background: "#000",
        }}
      />
    </div>
  );
}

export default Camera;
