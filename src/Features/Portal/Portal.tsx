import React from "react";
import Button from "../../Components/Button";
const Portal = () => {
  return (
    <div className="PortalShell">
      <section className="PortalNavigation">
        <div className="Time">11:41am Saturday, Jun 19</div>
        <div className="PortalButtonFilter">
          <Button text={"button1"} />
        </div>
      </section>
      <main>
        <div className="PortalHeader"></div>
        <div className="PortalRoster"></div>
      </main>
    </div>
  );
};

export default Portal;
