import React from 'react';
import { I18n, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Footer.scss';

const Footer = () => (
  <I18n ns="translations">
    {t => (
      <footer className={styles.container}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-6">
              <Trans i18nKey="footer.3">
                <p className={styles.address}>
                  All rights reserved, Orangutan Group limited,<br />Broadacre House, Ne1 6hq, Tyne and Wear, United Kingdom.{' '}
                  {/* <a href="https://beta.companieshouse.gov.uk/company/10009845" rel="noopener noreferrer" target="_blank">
                    registered company No. 10009845
                  </a> */}
                </p>
              </Trans>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-6">
              <ul className={styles.links}>
                <li>
                  <Link to="/terms-and-conditions">{t('footer.1')}</Link>
                </li>
                <li>
                  <Link to="/privacy">{t('footer.2')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )}
  </I18n>
);

export default Footer;
