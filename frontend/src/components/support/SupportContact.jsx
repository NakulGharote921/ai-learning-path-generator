import FadeInSection from "../home/FadeInSection"

function SupportContact() {
  return (
    <FadeInSection className="px-margin py-xl max-w-max_width mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-white p-lg rounded-xl shadow-sm text-center border border-outline-variant/20">
          <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-md">
            <span className="material-symbols-outlined text-primary">chat</span>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary mb-sm">Live Chat</h4>
          <p className="text-on-surface-variant font-body-sm mb-lg">Average response time: 2 mins</p>
          <button className="w-full bg-accent text-on-primary py-sm rounded-lg font-label-md text-label-md shadow-lg shadow-accent/20 hover:opacity-90 active:scale-95 transition-all">
            Start Conversation
          </button>
        </div>
        <div className="bg-white p-lg rounded-xl shadow-sm text-center border border-outline-variant/20">
          <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-md">
            <span className="material-symbols-outlined text-primary">mail</span>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary mb-sm">Email Support</h4>
          <p className="text-on-surface-variant font-body-sm mb-lg">Available 24/7 for complex issues</p>
          <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all">
            Send Ticket
          </button>
        </div>
        <div className="bg-white p-lg rounded-xl shadow-sm text-center border border-outline-variant/20">
          <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-md">
            <span className="material-symbols-outlined text-primary">description</span>
          </div>
          <h4 className="font-headline-md text-headline-md text-primary mb-sm">Documentation</h4>
          <p className="text-on-surface-variant font-body-sm mb-lg">Technical API and system docs</p>
          <div className="flex flex-col gap-xs">
            <a className="text-primary font-label-md underline hover:text-accent" href="#">
              Developer API
            </a>
            <a className="text-primary font-label-md underline hover:text-accent" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}

export default SupportContact
