import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web.admin-serp-qa.361b27e29e1b449facec.centralindia.aksapp.io/login');
  await page.getByTestId('access-one-login').click();
  await page.getByTestId('username').click();
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('testqaadminuser1.serp@smarterp.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.goto('https://web.admin-serp-qa.361b27e29e1b449facec.centralindia.aksapp.io/auth#id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkpSY080bnhzNWpnYzhZZE43STJoTE80Vl9xbDFiZG9pTVhtY1lnSG00SHMifQ.eyJzdWIiOiIyMzc2MDU2MzUiLCJlbWFpbCI6InRlc3RxYWFkbWludXNlcjEuc2VycEBzbWFydGVycC5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0cWFhZG1pbnVzZXIxLnNlcnBAc21hcnRlcnAuY29tIiwibmFtZSI6InRlc3RRQUFkbWluVXNlcjEgc2VycCIsInVwZGF0ZWRfYXQiOjE3MjU4Nzk5MDMsImdpdmVuX25hbWUiOiJ0ZXN0UUFBZG1pblVzZXIxIiwiZmFtaWx5X25hbWUiOiJzZXJwIiwibm9uY2UiOiJUclEwdWJWc3RLa1dDdngyYVVsUXVDU3kxRngtLTBmSSIsInNpZCI6IjZhZWQ1MTY4LTZkZTAtNDNmOC05NDNiLWVjOWYxZWUzMTk4OSIsInNfaGFzaCI6Ind4c21Ed0IwUmhoanFkUG9SclJOckEiLCJhdWQiOiIxNzFiOTdkMC04YjM5LTAxM2EtYWZkMy0wMjNiOWU5OWVmMTMxODY3ODYiLCJleHAiOjE3MjY0ODQ3MDUsImlhdCI6MTcyNTg3OTkwNSwiaXNzIjoiaHR0cHM6Ly9tYW5raW5kcGhhcm1hLXNhbmRib3gub25lbG9naW4uY29tL29pZGMvMiJ9.aObo8K1QSCHTfygQWm_EurWBtD0i3HzLayZ1PO_zUUem0BkHj_ZuqMIzpv7jifWPO_W4HZHsLsNFlmRb4KDsI1X581CjB7QNFkRndKmGhU4RK0TRAbXZvslkS_vgxDZBUtc49aXpisek11ZRFAWZZS2NkFfCkn6Qi3Nskhdx6GyX8j3-zsQxI-McqdDYvBlXfWan1m2OVbG8f6kg2iOLUhkJ-x0wRBhMA8A83O8VsCX7ayPEiyQFy2KouP60OD5WYhJbsPsCkhDrm6iGoKNgeiHSSd0NFL2MikQ11-dIUaoh2v1WZcjCK15y35kF7Iwv0tp7_SvMNfRE68kgQD4Dtw&state=sb4ANFlvnr81ViyFdpCPUxt7Vnw46qA9');
  await page.goto('https://web.admin-serp-qa.361b27e29e1b449facec.centralindia.aksapp.io/');
  await page.getByRole('button', { name: 'ZHO - FC Admin' }).click();
  await page.getByRole('row', { name: 'R/STR-MNK/24-25/00154 23/07/' }).getByTestId('review-request').click();
  await page.getByTestId('close-modal').click();
  await page.getByTestId('toogle-switch-button-1').check();
  await page.getByTestId('toogle-switch-button-2').check();
  await page.getByTestId('toogle-switch-button-3').check();
  await page.getByTestId('toogle-switch-button-4').check();
  await page.getByTestId('toogle-switch-button-5').check();
  await page.getByTestId('toogle-switch-button-0').check();
  await page.locator('td:nth-child(10)').first().click();
  await page.getByRole('dialog').getByTestId('button-approve').click();
});