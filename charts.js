(function() {
  'use strict';

  const colors = {
    primary: '#2B6CB0',
    secondary: '#2F855A',
    warning: '#DD6B20',
    danger: '#E53E3E',
    purple: '#6B46C1',
    teal: '#0D9488',
    muted: '#718096',
    bg: '#F0F4F8',
    bg2: '#FFFFFF',
    ink: '#1A365D',
    rule: '#E2E8F0'
  };

  const palette = ['#2B6CB0', '#2F855A', '#DD6B20', '#6B46C1', '#0D9488', '#E53E3E', '#3182CE', '#38A169'];

  function initChart(domId, option) {
    const dom = document.getElementById(domId);
    if (!dom) return null;
    const chart = echarts.init(dom, null, { renderer: 'svg' });
    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
    return chart;
  }

  // ==================== Tab 0: 市场概览 ====================

  // 1. 平均年度访客量（按地区）
  initChart('chart-visitors', {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', data: ['Eastern Caribbean', 'Western Caribbean', 'Southern Caribbean', 'Northern Caribbean'], axisLabel: { color: colors.muted, fontSize: 11 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: '访客量(百万)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [{
      type: 'bar', data: [
        { value: 2.1, itemStyle: { color: palette[0] } },
        { value: 1.4, itemStyle: { color: palette[1] } },
        { value: 2.8, itemStyle: { color: palette[2] } },
        { value: 0.9, itemStyle: { color: palette[3] } }
      ], barWidth: '50%', label: { show: true, position: 'top', formatter: '{c}M', color: colors.ink, fontSize: 12, fontWeight: 'bold' },
      itemStyle: { borderRadius: [6, 6, 0, 0] }
    }]
  });

  // 2. 客户满意度（按港口类型）
  initChart('chart-satisfaction', {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', data: ['Private Island', 'Grand Luxury', 'Premium', 'Mid-Range', 'Low Budget'], axisLabel: { color: colors.muted, fontSize: 10 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: '满意度(/10)', max: 10, nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [{
      type: 'bar', data: [
        { value: 9.6, itemStyle: { color: palette[4] } },
        { value: 9.0, itemStyle: { color: palette[0] } },
        { value: 9.5, itemStyle: { color: palette[3] } },
        { value: 9.2, itemStyle: { color: palette[1] } },
        { value: 8.4, itemStyle: { color: palette[5] } }
      ], barWidth: '50%', label: { show: true, position: 'top', formatter: '{c}', color: colors.ink, fontSize: 12, fontWeight: 'bold' },
      itemStyle: { borderRadius: [6, 6, 0, 0] }
    }]
  });

  // 3. 岸上消费（按国家）
  initChart('chart-shore-spend', {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', data: ['Bahamas', 'Jamaica', 'Mexico', 'Cayman', 'St. Thomas', 'Puerto Rico'], axisLabel: { color: colors.muted, fontSize: 10 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: '消费($)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [{
      type: 'bar', data: [
        { value: 185, itemStyle: { color: palette[2] } },
        { value: 172, itemStyle: { color: palette[2] } },
        { value: 145, itemStyle: { color: palette[0] } },
        { value: 138, itemStyle: { color: palette[1] } },
        { value: 125, itemStyle: { color: palette[3] } },
        { value: 110, itemStyle: { color: palette[5] } }
      ], barWidth: '55%', label: { show: true, position: 'top', formatter: '${c}', color: colors.ink, fontSize: 11, fontWeight: 'bold' },
      itemStyle: { borderRadius: [6, 6, 0, 0] }
    }]
  });

  // 4. 港口费用（按港口类型）
  initChart('chart-port-fees', {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', data: ['Grand Luxury', 'Premium', 'Mid-Range', 'Low Budget', 'Private Island'], axisLabel: { color: colors.muted, fontSize: 10 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: '费用($)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [{
      type: 'bar', data: [
        { value: 14.5, itemStyle: { color: palette[3] } },
        { value: 12.0, itemStyle: { color: palette[0] } },
        { value: 9.5, itemStyle: { color: palette[1] } },
        { value: 8.0, itemStyle: { color: palette[5] } },
        { value: 11.5, itemStyle: { color: palette[4] } }
      ], barWidth: '50%', label: { show: true, position: 'top', formatter: '${c}', color: colors.ink, fontSize: 12, fontWeight: 'bold' },
      itemStyle: { borderRadius: [6, 6, 0, 0] }
    }]
  });

  // 5. 季节性评分（按地区）
  initChart('chart-seasonality', {
    tooltip: { trigger: 'axis' },
    legend: { data: ['Eastern Caribbean', 'Western Caribbean', 'Southern Caribbean', 'Northern Caribbean'], top: 0, textStyle: { color: colors.muted, fontSize: 11 } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], axisLabel: { color: colors.muted, fontSize: 10 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: '季节性评分', max: 100, nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [
      { name: 'Eastern Caribbean', type: 'line', data: [45, 50, 65, 80, 85, 70, 55, 50, 40, 55, 70, 60], smooth: true, lineStyle: { width: 3, color: palette[0] }, itemStyle: { color: palette[0] }, areaStyle: { color: 'rgba(43,108,176,0.1)' } },
      { name: 'Western Caribbean', type: 'line', data: [55, 60, 70, 75, 80, 75, 65, 60, 55, 60, 65, 58], smooth: true, lineStyle: { width: 3, color: palette[1] }, itemStyle: { color: palette[1] }, areaStyle: { color: 'rgba(47,133,90,0.1)' } },
      { name: 'Southern Caribbean', type: 'line', data: [70, 72, 75, 78, 80, 78, 75, 74, 72, 73, 75, 72], smooth: true, lineStyle: { width: 3, color: palette[2] }, itemStyle: { color: palette[2] }, areaStyle: { color: 'rgba(221,107,32,0.1)' } },
      { name: 'Northern Caribbean', type: 'line', data: [35, 40, 55, 70, 80, 85, 80, 75, 60, 50, 40, 35], smooth: true, lineStyle: { width: 3, color: palette[3] }, itemStyle: { color: palette[3] }, areaStyle: { color: 'rgba(107,70,193,0.1)' } }
    ]
  });

  // ==================== Tab 1: 港口聚类分析 ====================

  // 6. 肘部法则
  initChart('chart-elbow', {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', data: ['1', '2', '3', '4', '5', '6', '7', '8'], name: '聚类数 k', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: 'Inertia', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [{
      type: 'line', data: [2800, 1650, 980, 520, 380, 290, 230, 190], smooth: false, lineStyle: { width: 3, color: palette[0] }, itemStyle: { color: palette[0] },
      markPoint: { data: [{ coord: ['4', 520], value: '肘部 k=4', itemStyle: { color: palette[5] } }], symbolSize: 50, label: { fontSize: 11, color: '#fff' } },
      markLine: { silent: true, data: [{ xAxis: '4', lineStyle: { color: palette[5], type: 'dashed', width: 2 } }] }
    }]
  });

  // 7. PCA聚类散点图
  initChart('chart-cluster-pca', {
    tooltip: { trigger: 'item', formatter: function(p) { return p.seriesName + '<br/>PC1: ' + p.value[0].toFixed(2) + '<br/>PC2: ' + p.value[1].toFixed(2); } },
    legend: { data: ['Mid-Range Luxury', 'Low Budget', 'Premium', 'Grand Luxury'], top: 0, textStyle: { color: colors.muted, fontSize: 11 } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: { type: 'value', name: 'PC1', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    yAxis: { type: 'value', name: 'PC2', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [
      { name: 'Mid-Range Luxury', type: 'scatter', symbolSize: 14, data: [[-1.2, 0.8], [-0.9, 1.1], [-1.5, 0.5], [-1.0, 0.9], [-1.3, 1.0]], itemStyle: { color: palette[0] } },
      { name: 'Low Budget', type: 'scatter', symbolSize: 14, data: [[1.5, -0.8], [1.8, -1.0], [1.3, -0.6], [1.6, -0.9], [1.4, -0.7]], itemStyle: { color: palette[1] } },
      { name: 'Premium', type: 'scatter', symbolSize: 14, data: [[-0.5, -1.2], [-0.3, -1.5], [-0.7, -1.0], [-0.4, -1.3], [-0.6, -1.1]], itemStyle: { color: palette[2] } },
      { name: 'Grand Luxury', type: 'scatter', symbolSize: 14, data: [[0.8, 1.5], [1.0, 1.8], [0.6, 1.3], [0.9, 1.6], [0.7, 1.4]], itemStyle: { color: palette[3] } }
    ]
  });

  // 8. 聚类：费用 vs 访客量
  initChart('chart-cluster-fees', {
    tooltip: { trigger: 'item', formatter: function(p) { return p.seriesName + '<br/>费用: $' + p.value[0] + '<br/>访客量: ' + p.value[1] + 'k'; } },
    legend: { data: ['Mid-Range Luxury', 'Low Budget', 'Premium', 'Grand Luxury'], top: 0, textStyle: { color: colors.muted, fontSize: 11 } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: { type: 'value', name: '港口费用($)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    yAxis: { type: 'value', name: '访客量(千)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [
      { name: 'Mid-Range Luxury', type: 'scatter', symbolSize: 16, data: [[9.5, 620], [9.8, 580], [9.2, 650], [9.6, 600]], itemStyle: { color: palette[0] } },
      { name: 'Low Budget', type: 'scatter', symbolSize: 16, data: [[8.0, 480], [8.2, 450], [7.8, 500], [8.1, 470]], itemStyle: { color: palette[1] } },
      { name: 'Premium', type: 'scatter', symbolSize: 16, data: [[12.0, 295], [12.5, 280], [11.8, 310], [12.2, 290]], itemStyle: { color: palette[2] } },
      { name: 'Grand Luxury', type: 'scatter', symbolSize: 20, data: [[14.5, 956], [14.8, 920], [14.2, 980], [14.6, 940]], itemStyle: { color: palette[3] } }
    ]
  });

  // 9. 聚类：满意度 vs 岸上消费
  initChart('chart-cluster-sat', {
    tooltip: { trigger: 'item', formatter: function(p) { return p.seriesName + '<br/>满意度: ' + p.value[0] + '<br/>岸上消费: $' + p.value[1]; } },
    legend: { data: ['Mid-Range Luxury', 'Low Budget', 'Premium', 'Grand Luxury'], top: 0, textStyle: { color: colors.muted, fontSize: 11 } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: { type: 'value', name: '满意度(/10)', min: 7.5, max: 10, nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    yAxis: { type: 'value', name: '岸上消费($)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [
      { name: 'Mid-Range Luxury', type: 'scatter', symbolSize: 16, data: [[9.2, 135], [9.3, 128], [9.1, 142], [9.25, 132]], itemStyle: { color: palette[0] } },
      { name: 'Low Budget', type: 'scatter', symbolSize: 16, data: [[8.4, 118], [8.5, 112], [8.3, 125], [8.45, 115]], itemStyle: { color: palette[1] } },
      { name: 'Premium', type: 'scatter', symbolSize: 16, data: [[9.5, 168], [9.6, 162], [9.4, 175], [9.55, 165]], itemStyle: { color: palette[2] } },
      { name: 'Grand Luxury', type: 'scatter', symbolSize: 20, data: [[9.0, 155], [9.1, 148], [8.9, 160], [9.05, 152]], itemStyle: { color: palette[3] } }
    ]
  });

  // ==================== Tab 2: 联合分析 ====================

  // 10. 联合分析效用值
  initChart('chart-conjoint-utilities', {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['娱乐主题', '餐饮体验', '舱房氛围', '船上设施'], top: 0, textStyle: { color: colors.muted, fontSize: 11 } },
    grid: { left: '3%', right: '4%', bottom: '8%', top: '15%', containLabel: true },
    xAxis: { type: 'category', data: ['Option A', 'Option B', 'Option C', 'Option D'], axisLabel: { color: colors.muted, fontSize: 11 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: '效用值', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [
      { name: '娱乐主题', type: 'bar', data: [2.1, 3.5, 1.8, 2.6], itemStyle: { color: palette[0] }, barGap: '10%' },
      { name: '餐饮体验', type: 'bar', data: [2.8, 2.2, 3.1, 1.9], itemStyle: { color: palette[1] } },
      { name: '舱房氛围', type: 'bar', data: [1.9, 2.5, 2.0, 2.8], itemStyle: { color: palette[2] } },
      { name: '船上设施', type: 'bar', data: [1.5, 1.8, 2.2, 1.6], itemStyle: { color: palette[3] } }
    ]
  });

  // 11. 属性相对重要性
  initChart('chart-conjoint-importance', {
    tooltip: { trigger: 'item', formatter: '{b}: {c}%' },
    legend: { orient: 'vertical', right: 10, top: 'center', textStyle: { color: colors.muted, fontSize: 11 } },
    series: [{
      type: 'pie', radius: ['45%', '70%'], center: ['40%', '50%'],
      data: [
        { value: 35, name: '娱乐主题', itemStyle: { color: palette[0] } },
        { value: 28, name: '餐饮体验', itemStyle: { color: palette[1] } },
        { value: 22, name: '舱房氛围', itemStyle: { color: palette[2] } },
        { value: 15, name: '船上设施', itemStyle: { color: palette[3] } }
      ],
      label: { formatter: '{b}\n{c}%', color: colors.ink, fontSize: 11 },
      emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.2)' } }
    }]
  });

  // ==================== Tab 3: 预测与A/B测试 ====================

  // 12. 决策树（用树状图模拟）
  initChart('chart-decision-tree', {
    tooltip: { trigger: 'item', formatter: '{b}' },
    series: [{
      type: 'tree',
      data: [{
        name: '预订提前时间\n< 30天?',
        itemStyle: { color: palette[0] },
        children: [
          {
            name: '是 → 取消风险高\n(65%)',
            itemStyle: { color: palette[5] },
            children: [
              { name: '未全额付款?\n是 → 取消(82%)', itemStyle: { color: palette[5] } },
              { name: '否 → 取消(45%)', itemStyle: { color: palette[2] } }
            ]
          },
          {
            name: '否 → 继续判断',
            itemStyle: { color: palette[1] },
            children: [
              { name: '收入 < $50k?\n是 → 取消(38%)', itemStyle: { color: palette[2] } },
              { name: '否 → 取消(12%)', itemStyle: { color: palette[1] } }
            ]
          }
        ]
      }],
      top: '5%', left: '10%', bottom: '5%', right: '10%',
      symbolSize: 10,
      label: { position: 'inside', verticalAlign: 'middle', align: 'center', fontSize: 10, color: '#fff', lineHeight: 14 },
      leaves: { label: { position: 'inside', verticalAlign: 'middle', align: 'center', fontSize: 10, color: '#fff' } },
      expandAndCollapse: false,
      animationDuration: 550,
      animationDurationUpdate: 750,
      lineStyle: { color: colors.muted, width: 2 }
    }]
  });

  // 13. 高风险客户特征
  initChart('chart-risk-factors', {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '5%', containLabel: true },
    xAxis: { type: 'value', name: '特征重要性', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    yAxis: { type: 'category', data: ['短预订提前时间', '未全额付款', '低收入', '低旅行历史', '无保险', '单人出行'], axisLabel: { color: colors.muted, fontSize: 11 }, axisLine: { lineStyle: { color: colors.rule } } },
    series: [{
      type: 'bar', data: [
        { value: 0.42, itemStyle: { color: palette[5] } },
        { value: 0.28, itemStyle: { color: palette[2] } },
        { value: 0.18, itemStyle: { color: palette[3] } },
        { value: 0.12, itemStyle: { color: palette[0] } },
        { value: 0.08, itemStyle: { color: palette[1] } },
        { value: 0.05, itemStyle: { color: palette[4] } }
      ], barWidth: '55%', label: { show: true, position: 'right', formatter: '{c}', color: colors.ink, fontSize: 11, fontWeight: 'bold' },
      itemStyle: { borderRadius: [0, 6, 6, 0] }
    }]
  });

  // 14. A/B测试 CTR对比
  initChart('chart-ab-ctr', {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', data: ['Caribbean Port', 'Tropical Beach', 'City Visit', 'Onboard Activity'], axisLabel: { color: colors.muted, fontSize: 11 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: 'CTR (%)', max: 35, nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted, formatter: '{value}%' }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [{
      type: 'bar', data: [
        { value: 26.7, itemStyle: { color: palette[2] } },
        { value: 16.5, itemStyle: { color: palette[0] } },
        { value: 8.6, itemStyle: { color: palette[5] } },
        { value: 12.3, itemStyle: { color: palette[1] } }
      ], barWidth: '50%', label: { show: true, position: 'top', formatter: '{c}%', color: colors.ink, fontSize: 12, fontWeight: 'bold' },
      itemStyle: { borderRadius: [6, 6, 0, 0] }
    }]
  });

  // 15. 图片评分 vs CTR
  initChart('chart-ab-rating', {
    tooltip: { trigger: 'item', formatter: function(p) { return p.name + '<br/>评分: ' + p.value[0] + '<br/>CTR: ' + p.value[1] + '%'; } },
    legend: { data: ['Caribbean Port', 'Tropical Beach', 'City Visit', 'Onboard Activity'], top: 0, textStyle: { color: colors.muted, fontSize: 11 } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: { type: 'value', name: '评分(1-10)', min: 5, max: 10, nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    yAxis: { type: 'value', name: 'CTR (%)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted, formatter: '{value}%' }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [
      { name: 'Caribbean Port', type: 'scatter', symbolSize: 24, data: [[8.2, 26.7]], itemStyle: { color: palette[2] }, label: { show: true, formatter: 'Caribbean', position: 'top', fontSize: 10 } },
      { name: 'Tropical Beach', type: 'scatter', symbolSize: 24, data: [[9.1, 16.5]], itemStyle: { color: palette[0] }, label: { show: true, formatter: 'Tropical', position: 'top', fontSize: 10 } },
      { name: 'City Visit', type: 'scatter', symbolSize: 24, data: [[6.8, 8.6]], itemStyle: { color: palette[5] }, label: { show: true, formatter: 'City', position: 'top', fontSize: 10 } },
      { name: 'Onboard Activity', type: 'scatter', symbolSize: 24, data: [[7.5, 12.3]], itemStyle: { color: palette[1] }, label: { show: true, formatter: 'Onboard', position: 'top', fontSize: 10 } }
    ]
  });

  // 16. EPS预测
  initChart('chart-eps-forecast', {
    tooltip: { trigger: 'axis' },
    legend: { data: ['NCLH 历史', 'NCLH 预测', 'CCL 历史', 'CCL 预测'], top: 0, textStyle: { color: colors.muted, fontSize: 11 } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: { type: 'category', data: ['2020', '2021', '2022', '2023', '2024', '2025(E)'], axisLabel: { color: colors.muted, fontSize: 11 }, axisLine: { lineStyle: { color: colors.rule } } },
    yAxis: { type: 'value', name: 'EPS ($)', nameTextStyle: { color: colors.muted, fontSize: 11 }, axisLabel: { color: colors.muted }, splitLine: { lineStyle: { color: colors.rule, type: 'dashed' } } },
    series: [
      { name: 'NCLH 历史', type: 'line', data: [-8.5, -4.2, -2.1, 1.8, 3.5, null], lineStyle: { width: 3, color: palette[0] }, itemStyle: { color: palette[0] }, connectNulls: false },
      { name: 'NCLH 预测', type: 'line', data: [null, null, null, null, 3.5, 5.97], lineStyle: { width: 3, color: palette[0], type: 'dashed' }, itemStyle: { color: palette[0] }, connectNulls: false },
      { name: 'CCL 历史', type: 'line', data: [-10.2, -5.8, -3.5, 0.5, 2.1, null], lineStyle: { width: 3, color: palette[2] }, itemStyle: { color: palette[2] }, connectNulls: false },
      { name: 'CCL 预测', type: 'line', data: [null, null, null, null, 2.1, 4.29], lineStyle: { width: 3, color: palette[2], type: 'dashed' }, itemStyle: { color: palette[2] }, connectNulls: false }
    ]
  });

})();
