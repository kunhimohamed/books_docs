import{_ as e,c as t,o as a,a as n}from"./app.3ddb3600.js";var i="/assets/not-saved.eba62769.png",s="/assets/saved.4d86d5cc.png",l="/assets/submitted.829b4c17.png",r="/assets/show-ledger-entries.e74ff12f.png",d="/assets/general-ledger.aa27b146.png",o="/assets/cancel.c3d2f6da.png",c="/assets/gl-cancelled.a5c267a6.png",h="/assets/delete.752d3f62.png";const S=JSON.parse('{"title":"Transactional Entries","description":"","frontmatter":{},"headers":[{"level":2,"title":"States of a Transactional Entry","slug":"states-of-a-transactional-entry"},{"level":2,"title":"Making an Entry","slug":"making-an-entry"},{"level":3,"title":"Draft","slug":"draft"},{"level":3,"title":"Saved","slug":"saved"},{"level":3,"title":"Submitted","slug":"submitted"},{"level":2,"title":"Checking Ledger Entries","slug":"checking-ledger-entries"},{"level":2,"title":"Cancelling and Deleting an Entry","slug":"cancelling-and-deleting-an-entry"},{"level":3,"title":"Cancel","slug":"cancel"},{"level":3,"title":"Delete","slug":"delete"}],"relativePath":"transactions/transactional-entries.md","lastUpdated":1655278874000}'),g={name:"transactions/transactional-entries.md"},p=n('<h1 id="transactional-entries" tabindex="-1">Transactional Entries <a class="header-anchor" href="#transactional-entries" aria-hidden="true">#</a></h1><p>In Frappe Books transactions are a special type of entry. These are entries that change an Accounts balance.</p><p>The following are transactional entries in Frappe Books</p><ul><li>Sales Invoice</li><li>Purchase Invoice</li><li>Payments</li><li>Journal Entries</li></ul><h2 id="states-of-a-transactional-entry" tabindex="-1">States of a Transactional Entry <a class="header-anchor" href="#states-of-a-transactional-entry" aria-hidden="true">#</a></h2><p>A transactional entry goes through the following states</p><table><thead><tr><th style="text-align:right;">#</th><th style="text-align:left;">State</th><th style="text-align:right;">In Database</th><th style="text-align:right;">Editable</th><th style="text-align:right;">In Analytics</th></tr></thead><tbody><tr><td style="text-align:right;">1</td><td style="text-align:left;">Draft</td><td style="text-align:right;">No</td><td style="text-align:right;">Yes</td><td style="text-align:right;">No</td></tr><tr><td style="text-align:right;">2</td><td style="text-align:left;">Saved</td><td style="text-align:right;">Yes</td><td style="text-align:right;">Yes</td><td style="text-align:right;">No</td></tr><tr><td style="text-align:right;">3</td><td style="text-align:left;">Not Saved</td><td style="text-align:right;">No</td><td style="text-align:right;">Yes</td><td style="text-align:right;">No</td></tr><tr><td style="text-align:right;">4</td><td style="text-align:left;">Submitted</td><td style="text-align:right;">Yes</td><td style="text-align:right;">No</td><td style="text-align:right;">Yes</td></tr><tr><td style="text-align:right;">5</td><td style="text-align:left;">Cancelled</td><td style="text-align:right;">Yes</td><td style="text-align:right;">No</td><td style="text-align:right;">No</td></tr><tr><td style="text-align:right;">6</td><td style="text-align:left;">Deleted</td><td style="text-align:right;">No</td><td style="text-align:right;">No</td><td style="text-align:right;">No</td></tr></tbody></table><p>Check the sections below on more details about these states.</p><h2 id="making-an-entry" tabindex="-1">Making an Entry <a class="header-anchor" href="#making-an-entry" aria-hidden="true">#</a></h2><p>To create and entry first navigate to the page, then click the blue <code>+</code> button.</p><div class="info custom-block"><p class="custom-block-title">Transaction Form</p><p>Other than Payments all other transactional entries are displayed in full page forms. Payments are displayed in a quick edit form.</p></div><p>To record an entry it needs to first be <em>Saved</em> then <em>Submitted</em>.</p><h3 id="draft" tabindex="-1">Draft <a class="header-anchor" href="#draft" aria-hidden="true">#</a></h3><p>Initially the Entry is in the <strong>Draft</strong> state. This means that its values can still be edited.</p><p><img src="'+i+'" alt="Before Save"></p><p>Before the entry has been saved by clicking the blue Save button</p><ol><li>No name is assigned to the entry</li><li>The entry has not yet been stored in the database</li></ol><h3 id="saved" tabindex="-1">Saved <a class="header-anchor" href="#saved" aria-hidden="true">#</a></h3><p>After a transactional entry is saved, it is still in the <strong>Draft</strong> state.</p><p><img src="'+s+'" alt="Saved"></p><ol><li>A name has been assigned to the entry</li><li>The entry has been stored in the database</li><li>The entry can still be edited</li></ol><div class="info custom-block"><p class="custom-block-title">Not Saved</p><p>On editing a saved entry, the status changes to <strong>Not Saved</strong>.</p><p>Save needs to be clicked to store the changes at which point the status goes back to <strong>Saved</strong>.</p></div><h3 id="submitted" tabindex="-1">Submitted <a class="header-anchor" href="#submitted" aria-hidden="true">#</a></h3><p>After saving the entry, Submit needs to be clicked for the entry to be recorded. The entry will now be in the <strong>Submitted</strong> state.</p><p><img src="'+l+'" alt="Submitted"></p><p>The status badge highlighed above will reflect the state of the transaction.</p><div class="info custom-block"><p class="custom-block-title">Status Badge</p><p>Some transactions such as the Sales and Purchase Invoices will show a different status badge. This is to indicate whether a Payment has been made.</p></div><p>Whenever a transactional entry is submitted few things happen</p><ol><li>Account balances are updated</li><li>General Ledger Entries are made</li></ol><p>On Submitting a few options become available such as Ledger Entries</p><p><img src="'+r+'" alt="Show Ledger Entries"></p><h2 id="checking-ledger-entries" tabindex="-1">Checking Ledger Entries <a class="header-anchor" href="#checking-ledger-entries" aria-hidden="true">#</a></h2><p>Clicking on Ledger Entries from the <code>...</code> menu will display the accounts that have been affected by this transaction in the General Ledger.</p><p><img src="'+d+'" alt="General Ledger"></p><h2 id="cancelling-and-deleting-an-entry" tabindex="-1">Cancelling and Deleting an Entry <a class="header-anchor" href="#cancelling-and-deleting-an-entry" aria-hidden="true">#</a></h2><p>For an entry to be deleted it needs to first be cancelled.</p><p><img src="'+o+'" alt="Cancel and Delete"></p><h3 id="cancel" tabindex="-1">Cancel <a class="header-anchor" href="#cancel" aria-hidden="true">#</a></h3><p>On clicking <strong>Cancel</strong>, Account balances and General Ledger Entries are reverted. Now the entries won&#39;t be included in any of the analytics but they will still be present in the system and can be duplicated.</p><p>To view these cancelled entries in the General Ledger, click on the Include Cancelled checkmark.</p><p><img src="'+c+'" alt="Include Cancelled"></p><p>In the above image you can see reverse entries that have been made on cancellation.</p><h3 id="delete" tabindex="-1">Delete <a class="header-anchor" href="#delete" aria-hidden="true">#</a></h3><p>On clicking <strong>Delete</strong>, a confirmation is required to carry out the action.</p><p><img src="'+h+'" alt="Delete"></p><p>When an entry is deleted all traces of it are removed from the system, this includes all the reverted entries.</p><div class="danger custom-block"><p class="custom-block-title">Deletion</p><p>Deletion is an action that cannot be undone. Make sure you really want to delete an entry before you go ahead with it.</p></div><hr><p>Now that you are well versed with Transactional Entries in Frappe Books, you can move on to learning about the individual types of Transactional Entries.</p>',49),y=[p];function u(b,m,f,v,x,_){return a(),t("div",null,y)}var T=e(g,[["render",u]]);export{S as __pageData,T as default};
