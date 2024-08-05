import TimelineEvent from "./TimelineEvent";
import "../Styles/Timeline.css";

function Timeline() {
  return (
    <>
      <div className="background-color-2">
        <div className="overflow-container">
          <h1 className="headline top ">Experience</h1>
        </div>

        <div className="container center column ">
          <TimelineEvent
            year="2015"
            title="testa"
            underTitle="oslo"
            text="bla bla bla"
          />

          <TimelineEvent
            year="2015"
            title="testa"
            underTitle="oslo"
            text="
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						in luctus nunc. Integer lobortis ante sit amet felis elementum, nec
						sollicitudin felis consequat. Duis odio quam, scelerisque id lacus
						eget, efficitur malesuada augue. Nullam sit amet sollicitudin nisl.
						Ut ornare ante ut imperdiet porta. Sed a mi arcu. Nulla molestie
						dolor at neque pretium, nec feugiat sem placerat. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac
						turpis egestas. Aliquam condimentum mauris non sem aliquet accumsan.
						Proin egestas convallis sodales. Nullam porta ipsum at nulla
						scelerisque cursus. Etiam non lorem leo. Pellentesque sapien elit,
						consectetur non sodales vel, pharetra non ipsum. Ut sodales dui
						vitae aliquam posuere. Vivamus dictum nulla id lacus imperdiet, ac
						ullamcorper justo volutpat. Quisque sit amet bibendum urna, eget
						suscipit quam. Etiam sodales lacus eget risus rutrum pharetra.
						Aenean sed ornare augue. Nullam nec lacinia mi, nec laoreet orci.
						Vestibulum tincidunt non neque vitae rutrum. Cras malesuada eu urna
						at imperdiet. Proin vel viverra ipsum, nec laoreet dolor. Morbi
						euismod leo ac ornare facilisis. Duis id purus semper, condimentum
						orci at, consectetur dui. Ut volutpat justo nec metus aliquet, nec
						scelerisque neque mollis. Maecenas elementum malesuada sagittis.
						Phasellus et cursus justo, vitae tincidunt neque. Nulla pellentesque
						eu lorem eget dapibus. Nam varius euismod dolor quis consectetur. In
						nec justo sed erat mattis mattis. Pellentesque sollicitudin vitae
						risus non blandit. In augue dolor, porta eget nulla ac, pretium
						elementum elit. Duis facilisis rutrum erat, nec cursus urna finibus
						sed. Nullam lectus mauris, vestibulum non mauris vel, porttitor
						vulputate nisl. Morbi venenatis neque enim, ullamcorper molestie
						lectus dictum eget. Sed convallis et nisi sed iaculis. Pellentesque
						posuere tortor magna, vitae dapibus quam aliquam viverra. Aliquam
						dictum augue sit amet ante pharetra, vel volutpat magna tempus.
						Vivamus quis ullamcorper turpis. Suspendisse auctor iaculis aliquet.
						Aenean et quam varius, aliquet mi non, faucibus ipsum. Nulla
						facilisi. Fusce ac nibh non eros consectetur tempus."
          />
          <TimelineEvent
            year="2015"
            title="testa"
            underTitle="oslo"
            text="
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						in luctus nunc. Integer lobortis ante sit amet felis elementum, nec
						sollicitudin felis consequat. Duis odio quam, scelerisque id lacus
						eget, efficitur malesuada augue. Nullam sit amet sollicitudin nisl.
						Ut ornare ante ut imperdiet porta. Sed a mi arcu. Nulla molestie
						dolor at neque pretium, nec feugiat sem placerat. Pellentesque
						habitant morbi tristique senectus et netus et malesuada fames ac
						turpis egestas. Aliquam condimentum mauris non sem aliquet accumsan.
						Proin egestas convallis sodales. Nullam porta ipsum at nulla
						scelerisque cursus. Etiam non lorem leo. Pellentesque sapien elit,
						consectetur non sodales vel, pharetra non ipsum. Ut sodales dui
						vitae aliquam posuere. Vivamus dictum nulla id lacus imperdiet, ac
						ullamcorper justo volutpat. Quisque sit amet bibendum urna, eget
						suscipit quam. Etiam sodales lacus eget risus rutrum pharetra.
						Aenean sed ornare augue. Nullam nec lacinia mi, nec laoreet orci.
						Vestibulum tincidunt non neque vitae rutrum. Cras malesuada eu urna
						at imperdiet. Proin vel viverra ipsum, nec laoreet dolor. Morbi
						euismod leo ac ornare facilisis. Duis id purus semper, condimentum
						orci at, consectetur dui. Ut volutpat justo nec metus aliquet, nec
						scelerisque neque mollis. Maecenas elementum malesuada sagittis.
						Phasellus et cursus justo, vitae tincidunt neque. Nulla pellentesque
						eu lorem eget dapibus. Nam varius euismod dolor quis consectetur. In
						nec justo sed erat mattis mattis. Pellentesque sollicitudin vitae
						risus non blandit. In augue dolor, porta eget nulla ac, pretium
						elementum elit. Duis facilisis rutrum erat, nec cursus urna finibus
						sed. Nullam lectus mauris, vestibulum non mauris vel, porttitor
						vulputate nisl. Morbi venenatis neque enim, ullamcorper molestie
						lectus dictum eget. Sed convallis et nisi sed iaculis. Pellentesque
						posuere tortor magna, vitae dapibus quam aliquam viverra. Aliquam
						dictum augue sit amet ante pharetra, vel volutpat magna tempus.
						Vivamus quis ullamcorper turpis. Suspendisse auctor iaculis aliquet.
						Aenean et quam varius, aliquet mi non, faucibus ipsum. Nulla
						facilisi. Fusce ac nibh non eros consectetur tempus."
          />
        </div>
      </div>
    </>
  );
}

export default Timeline;
