import{_ as e,c as a,o as t,a as n}from"./app.3ddb3600.js";var o="/assets/balance-sheet.f3075f8e.png",r="/assets/balance-sheet-folded.706fb2b4.png";const b=JSON.parse('{"title":"Balance Sheet","description":"","frontmatter":{},"headers":[{"level":2,"title":"Filters","slug":"filters"},{"level":3,"title":"Based On","slug":"based-on"},{"level":3,"title":"Periodicity","slug":"periodicity"},{"level":3,"title":"Date Range Filters","slug":"date-range-filters"},{"level":3,"title":"Consolidate Columns","slug":"consolidate-columns"},{"level":3,"title":"Hide Group Amounts","slug":"hide-group-amounts"},{"level":2,"title":"Folding Rows","slug":"folding-rows"}],"relativePath":"analytics/balance-sheet.md","lastUpdated":1655287482000}'),s={name:"analytics/balance-sheet.md"},i=n('<h1 id="balance-sheet" tabindex="-1">Balance Sheet <a class="header-anchor" href="#balance-sheet" aria-hidden="true">#</a></h1><p>A Balance Sheet is the financial statement of a company which states assets, liabilities and equity at a particular point in time.</p><p>In Frappe Books, you can view the balance sheet for your accounts based on monthly, quarterly, half-yearly, and yearly periods.</p><p>Navigate to this report from the sidebar: <code>Reports &gt; Balance Sheet</code></p><p><img src="'+o+'" alt="Balance Sheet"></p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h2><p>The Balance Sheet report has several filters which can help you narrow the date range between which to display the report.</p><h3 id="based-on" tabindex="-1">Based On <a class="header-anchor" href="#based-on" aria-hidden="true">#</a></h3><p>This allows for toggling betwee the kind of filters used set the date range. It has 2 values:</p><ol><li>Until Date</li><li>Fiscal Year</li></ol><h3 id="periodicity" tabindex="-1">Periodicity <a class="header-anchor" href="#periodicity" aria-hidden="true">#</a></h3><p>This selects the interval for which the Balance Sheet values have to be calculated.</p><p>Example setting this to Monthly will display columns on a monthly basis.</p><h3 id="date-range-filters" tabindex="-1">Date Range Filters <a class="header-anchor" href="#date-range-filters" aria-hidden="true">#</a></h3><p>These filters depend on the value of Based On</p><table><thead><tr><th>Based On</th><th>Date Range Filters</th></tr></thead><tbody><tr><td>Until Date</td><td>To Date and Count</td></tr><tr><td>Fiscal Year</td><td>To Year and From Year</td></tr></tbody></table><h4 id="to-date-and-count" tabindex="-1">To Date and Count <a class="header-anchor" href="#to-date-and-count" aria-hidden="true">#</a></h4><p><strong>To Date</strong> is the final date until which the report is to be displayed, by default the values is tomorrow&#39;s date.</p><p><strong>Count</strong> depends on Periodicity so if Count is 3 and Periodicity is Monthly then the report will display Balance Sheet columns for the last three months starting from <strong>To Date</strong></p><h4 id="to-year-and-from-year" tabindex="-1">To Year and From Year <a class="header-anchor" href="#to-year-and-from-year" aria-hidden="true">#</a></h4><p>These decide the fiscal year between which the Balance Sheet report has to be displayed. The number of columns will depend on the Periodicity.</p><h3 id="consolidate-columns" tabindex="-1">Consolidate Columns <a class="header-anchor" href="#consolidate-columns" aria-hidden="true">#</a></h3><p>Checking this this will sum up all the values for each row and display a single column.</p><h3 id="hide-group-amounts" tabindex="-1">Hide Group Amounts <a class="header-anchor" href="#hide-group-amounts" aria-hidden="true">#</a></h3><p>The Balance Sheet report format displays the group accounts such as Current Assets along with the non group accounts such as Cash and Debtors.</p><p>Group account balances depend on the non group account balances under them, group account balances are not directly updated.</p><p>So clicking on <strong>Hide Group Amounts</strong> will display only the non group account amounts making the report a bit easier to read.</p><h2 id="folding-rows" tabindex="-1">Folding Rows <a class="header-anchor" href="#folding-rows" aria-hidden="true">#</a></h2><p><img src="'+r+'" alt="Balance Sheet Folded Rows"></p><p>Rows in the Balance Sheet report which display group accounts can be clicked to fold all the rows underneath them.</p>',30),l=[i];function d(h,c,p,u,f,g){return t(),a("div",null,l)}var y=e(s,[["render",d]]);export{b as __pageData,y as default};
