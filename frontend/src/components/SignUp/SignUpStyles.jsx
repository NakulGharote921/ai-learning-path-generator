function SignUpStyle() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        body { background-color: #FFF8DE; }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(87, 106, 143, 0.1);
        }
        .network-gradient {
            background: radial-gradient(circle at top left, #576a8f 0%, #b7bdf7 100%);
        }
        .auth-input:focus {
            outline: none;
            border-color: #3f5275;
            box-shadow: 0 0 0 2px rgba(63, 82, 117, 0.1);
        }
        .btn-pressable {
            transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
            box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
        }
        .btn-pressable:active {
            transform: translateY(2px);
            box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.1);
        }
    `,
      }}
    />
  )
}

export default SignUpStyle
