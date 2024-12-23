import DecapCmsApp from "decap-cms-app";

var CustomPreview = createClass({
  render: function () {
    var entry = this.props.entry;

    // Add 'prose' class to the div for the tailwind typography styles
    return h("div", { className: "prose" }, this.props.widgetFor("body"));
  },
});

DecapCmsApp.registerPreviewTemplate("blog", CustomPreview);
