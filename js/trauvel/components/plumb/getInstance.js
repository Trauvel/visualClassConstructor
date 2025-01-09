function getInstance() {
    return jsPlumb.getInstance({
        Connector: ["Bezier", { curviness: 50 }],
        PaintStyle: { stroke: "#00f", strokeWidth: 2 },
        Endpoint: ["Dot", { radius: 5 }],
        EndpointStyle: { fill: "#00f" },
        HoverPaintStyle: { stroke: "#f00" }
    });
}