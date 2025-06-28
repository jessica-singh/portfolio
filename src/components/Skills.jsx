import { useEffect } from 'react';
import * as d3 from 'd3';

const Skills = () => {
  useEffect(() => {
    const width = window.innerWidth > 800 ? 800 : window.innerWidth - 40;
    const height = 600;
    const radius = 30;

    const nodes = [
      { id: 'Python', group: 1 },
      { id: 'React', group: 2 },
      { id: 'JavaScript', group: 2 },
      { id: 'TypeScript', group: 2 },
      { id: 'Node.js', group: 2 },
      { id: 'MongoDB', group: 2 },
      { id: 'PyTorch', group: 1 },
      { id: 'TensorFlow', group: 1 },
      { id: 'Scikit-Learn', group: 1 },
      { id: 'NLP', group: 1 },
      { id: 'Computer Vision', group: 1 },
      { id: 'Data Science', group: 1 },
    ];

    const nodeById = Object.fromEntries(nodes.map((d) => [d.id, d]));
    const links = [
      ['Python', 'PyTorch'],
      ['Python', 'TensorFlow'],
      ['Python', 'Scikit-Learn'],
      ['Python', 'NLP'],
      ['Python', 'Computer Vision'],
      ['Python', 'Data Science'],
      ['React', 'JavaScript'],
      ['JavaScript', 'TypeScript'],
      ['JavaScript', 'Node.js'],
      ['Node.js', 'MongoDB'],
    ].map(([source, target]) => ({
      source: nodeById[source],
      target: nodeById[target],
    }));

    d3.select('#skills-graph').select('svg').remove();

    const svg = d3
      .select('#skills-graph')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('display', 'block')
      .style('margin', 'auto');

    const defs = svg.append('defs');
    const filter = defs
      .append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');
    filter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'blur');
    const merge = filter.append('feMerge');
    merge.append('feMergeNode').attr('in', 'blur');
    merge.append('feMergeNode').attr('in', 'SourceGraphic');

    const simulation = d3
      .forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide(radius + 10))
      .on('tick', ticked);

    // Force to restrict nodes within bounds
    const boundingBox = () => {
      for (const node of nodes) {
        node.x = Math.max(radius, Math.min(width - radius, node.x));
        node.y = Math.max(radius, Math.min(height - radius, node.y));
      }
    };
    simulation.force('bound', boundingBox);

    const link = svg
      .append('g')
      .attr('stroke', '#aaa')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', 1.5);

    const node = svg
      .append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .call(
        d3
          .drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    node
      .append('circle')
      .attr('r', radius)
      .attr('fill', (d) => (d.group === 1 ? '#a3bffa' : '#fad2e1'))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('filter', 'url(#glow)')
      .on('mouseover', function (event, hoveredNode) {
        const connected = new Set();
        links.forEach((l) => {
          if (l.source.id === hoveredNode.id) connected.add(l.target.id);
          if (l.target.id === hoveredNode.id) connected.add(l.source.id);
        });

        simulation.force(
          'charge',
          d3.forceManyBody().strength((d) =>
            d.id === hoveredNode.id || connected.has(d.id) ? -500 : -150
          )
        );
        simulation.alpha(0.7).restart();
      })
      .on('mouseout', () => {
        simulation.force('charge', d3.forceManyBody().strength(-150));
        simulation.alpha(0.5).restart();
      });

    node
      .append('text')
      .text((d) => d.id)
      .attr('text-anchor', 'middle')
      .attr('dy', 5)
      .attr('fill', '#fff')
      .style('font-size', '14px')
      .style('pointer-events', 'none');

    function ticked() {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    }

    return () => {
      simulation.stop();
      d3.select('#skills-graph').select('svg').remove();
    };
  }, []);

  return (
    <section id="skills" className="py-20">
      <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>
      <p className="text-center mb-10 text-gray-400">
        Hover over a skill node to see related skills gently react.
      </p>
      <div id="skills-graph" className="relative"></div>
    </section>
  );
};

export default Skills;
