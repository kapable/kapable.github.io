import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function Post2021() {
    return (
        <div>
            Heelo
            <button>
                <Link to="/auth" >시작하기</Link>
            </button>
        </div>
    )
}

export default withRouter(Post2021);
