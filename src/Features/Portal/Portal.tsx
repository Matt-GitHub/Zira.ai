import React from "react";

const Portal = () => {
  return (
    <div className="PortalShell">
      <section className="PortalNavigation">
        <div className="Time">11:41am Saturday, Jun 19</div>
        <div className="PortalButtonFilter">
          <div>Button 1</div>
          <div>Button 2</div>
          <div>Button 3</div>
          <div>Button 4</div>
          <div>Button 5</div>
          <div>Button 6</div>
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
