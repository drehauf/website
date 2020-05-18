import React from 'react';
// import Button from 'components/simple/Button';

const Widget = ({ action, onClose }) => {

  const onDoneClick = () => {
    document.getElementById(action.id).checked = false;
    onClose()
  }

  const onCancelClick = () => {
    if (window.confirm('Wirklich verlassen? Änderungen werden nicht gespeichert')) {
      onDoneClick()
    };
  }

  return (
    <div className='widget'>
      <div className='widget_header'></div>
      <div className='widget_body'> {/* LOREM IPSUM */}
        <p>I'm baby gentrify paleo chambray affogato kickstarter. Hot chicken fanny pack before they sold out lomo scenester. Before they sold out YOLO kitsch, scenester venmo hexagon seitan. Irony cliche ugh, art party flexitarian schlitz celiac gluten-free. Normcore mustache 8-bit, subway tile austin selvage pork belly ramps. Enamel pin intelligentsia microdosing, tattooed chillwave everyday carry wayfarers la croix. Hammock polaroid cardigan, poke raclette hot chicken VHS iceland. Pitchfork keytar cornhole, blog gentrify blue bottle kitsch shabby chic portland woke man bun pok pok tofu meggings kickstarter. Subway tile kale chips mumblecore hell of, seitan literally offal pok pok celiac irony vegan banjo lyft. Post-ironic tbh leggings cred skateboard palo santo put a bird on it photo booth kinfolk drinking vinegar. Viral 8-bit adaptogen iPhone williamsburg. Ennui poke pop-up, iPhone listicle squid franzen DIY chia messenger bag. Microdosing kickstarter cardigan, blue bottle iceland chicharrones beard chillwave cronut synth. Craft beer tote bag food truck post-ironic. Cray seitan church-key poutine hashtag hoodie chillwave, palo santo beard air plant ennui lo-fi. Ramps church-key YOLO vaporware enamel pin. Yuccie vape marfa pinterest. Skateboard hoodie DIY meggings, pug photo booth mixtape banjo YOLO. Tattooed street art offal lumbersexual hoodie poutine. VHS man bun keytar subway tile. Locavore semiotics selvage, bitters iceland drinking vinegar keytar raclette 90's chia church-key craft beer fashion axe. Franzen taxidermy copper mug skateboard shoreditch vegan echo park subway tile cred small batch. Actually affogato schlitz shoreditch vinyl adaptogen mumblecore iceland. Listicle cray crucifix, migas swag kombucha keytar raclette brunch irony glossier mustache squid iceland. Keffiyeh hoodie organic, gastropub etsy drinking vinegar literally sriracha small batch humblebrag ramps knausgaard. Disrupt kickstarter retro, seitan listicle ramps selfies food truck celiac locavore. Banjo skateboard single-origin coffee franzen seitan PBR&B. Jean shorts hell of portland tattooed. DIY dreamcatcher williamsburg banjo gluten-free roof party la croix pinterest subway tile. Palo santo neutra church-key woke ethical organic. Craft beer raw denim church-key yr, knausgaard bespoke tbh before they sold out art party heirloom meggings. Freegan direct trade microdosing dreamcatcher master cleanse 90's af drinking vinegar. Tumblr bushwick tacos, occupy stumptown VHS taiyaki vexillologist viral green juice tote bag photo booth succulents. Meggings ethical salvia brunch kombucha cronut. Chillwave next level irony, twee hell of lyft seitan tbh literally affogato. Forage +1 unicorn plaid franzen brunch chambray artisan pug. Lo-fi cardigan flannel deep v you probably haven't heard of them ethical banjo subway tile ennui migas. Viral vape prism, iPhone hell of ramps 90's 8-bit mustache chambray beard. Raw denim XOXO tacos disrupt occupy wolf. Vape pop-up palo santo jean shorts, tacos four loko butcher single-origin coffee echo park drinking vinegar hexagon lo-fi freegan. Prism fashion axe mumblecore activated charcoal. Hammock you probably haven't heard of them umami activated charcoal. Unicorn lyft waistcoat selfies. Sustainable hammock meggings slow-carb 90's. Disrupt snackwave ennui bushwick. Salvia irony readymade sustainable everyday carry fam whatever tumblr cold-pressed. Gastropub gochujang tousled, hexagon wolf letterpress slow-carb tote bag tofu gluten-free pabst. Flannel mixtape cornhole plaid hammock. Hell of scenester paleo bitters listicle yr pop-up slow-carb meggings deep v retro pitchfork. Tattooed leggings trust fund deep v pork belly. Palo santo pour-over pug, biodiesel hella chicharrones hashtag. Enamel pin dreamcatcher gastropub, fashion axe franzen farm-to-table four loko. Tumeric succulents semiotics iceland meggings. Kombucha pug copper mug, succulents messenger bag affogato tumeric unicorn artisan tousled. Gluten-free palo santo gastropub etsy tumblr cronut. Letterpress readymade pug meh cardigan mumblecore. Mustache art party vexillologist succulents meditation cloud bread echo park whatever lo-fi woke scenester knausgaard kogi brooklyn. Dummy text? More like dummy thicc text, amirite?</p>
      </div>
      <div className='widget_footer'>
        <p>{action.name}</p>
        <div className='widget_footer_actions'>
          <a className="button" onClick={() => onDoneClick()}>FERTIG</a>
          <a className="button destructive" onClick={() => onCancelClick()}>ABBRECHEN</a>
        </div>
      </div>
    </div>
  );
}

export default Widget;