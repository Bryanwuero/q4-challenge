export var reportsWidget = {
  options: {
    containerSelector: "#reports",
    template: ` {{#.}}
        <article class="reports_item">
            <a href="{{cover}}" target="_blank">
                <img class="reports_cover" src="{{cover}}" alt="{{title}} Cover" />
            </a>
            <footer class="reports_docs">
                {{#documents}}
                <h3 class="reports_title">
                    <a href="{{url}}" target="_blank">{{title}} <span>({{file_size}} {{file_type}}) </span></a>
                </h3>
                {{/documents}}
            </footer>
        </article>
    {{/.}}`,
  },

  init: function () {
    this.renderReports(reportData || []);
  },

  renderReports: function (reports) {
    var inst = this,
      options = inst.options;

    var reports = Mustache.render(options.template, reports);
    var container = document.getElementById("reports");
    container.innerHTML = reports;
  },
};

reportsWidget.init();
