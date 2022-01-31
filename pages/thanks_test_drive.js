import {useRouter} from "next/router";
import en from "../locales/en/en";
import ru from "../locales/ru/ru";
import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function ThanksTestDrive(props) {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;
    return (
        <MainLayout title={t.thanks_test_drive.title}>
            <div className={router.locale === 'en' ? 'content has-en-lms-background' : 'content has-ru-lms-background'}>
                <div className="is has-text-centered-desktop has-text-centered-mobile">
                    <div className="success-checkmark">
                        <div className="check-icon">
                            <span className="icon-line line-tip"/>
                            <span className="icon-line line-long"/>
                            <div className="icon-circle"/>
                            <div className="icon-fix"/>
                        </div>
                    </div>
                    <h5 className="is-success has-text-white is-light is-large">{t.thanks_test_drive.title}</h5>
                    <Link href="/">
                        <a className='has-text-centered-desktop is-center'>
                            <p className="has-text-white">{t.goBackBtnText}</p>
                        </a>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}