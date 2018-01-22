import {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'dva';
import IndexPage from './IndexPage';

import styles from './MainLayout.css';

const STATUS = {
    NORMAL: 0,
    HEADER_DISAPPEAR: 1,
};

const disappearY = 120;

class MainLayout extends Component{
    constructor(props) {
        super(props);
        this.scrollTop = 0;
        this.state = {
            status: STATUS.NORMAL
        }
    }
    componentDidMount() {
        this.handleScroll();
    }
    handleScroll = () => {
        const {status} = this.state;
        this.scrollTop = this.body.scrollTop;
        if(this.scrollTop > disappearY && status !== STATUS.HEADER_DISAPPEAR) {
            this.setState({
                status: STATUS.HEADER_DISAPPEAR
            });
        }else if(this.scrollTop <= disappearY && status !== STATUS.NORMAL){
            this.setState({
                status: STATUS.NORMAL
            });
        }
    }
    render() {
        const {status} = this.state;
        let headerClass = '';
        if(status === STATUS.HEADER_DISAPPEAR) {
            headerClass = styles.hiddenHeader;
        }
        return (
            <div ref={(c) => this.body = c} className={styles.allBody} onScroll={this.handleScroll}>
                <div className={styles.container}>
                    <header className={`${styles.header} ${headerClass}`}>
                        Our React Router 4 App
                    </header>
                    <main className={styles.main}>
                        <Route path="/" exact component={IndexPage} />
                    </main>
              </div>
            </div>
          );
    }
}

export default connect()(MainLayout);
